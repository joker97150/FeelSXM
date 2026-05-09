"""Backend tests for Feel SXM API: root + bookings."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://island-charters.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Root endpoint
def test_root(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    assert r.json().get("message") == "Feel SXM API"


# Bookings: create + verify + list
def test_create_booking_valid(client):
    payload = {
        "name": "TEST_Olivia Brown",
        "email": "TEST_olivia@example.com",
        "whatsapp": "+15550001234",
        "date": "2026-02-14",
        "persons": 4,
        "experience_type": "Sunset cruise",
        "boat_name": "Sea Ray Sundancer",
        "message": "Anniversary trip",
    }
    r = client.post(f"{API}/bookings", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert "_id" not in data
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["whatsapp"] == payload["whatsapp"]
    assert data["persons"] == 4
    assert data["experience_type"] == payload["experience_type"]
    assert data["boat_name"] == payload["boat_name"]
    assert "created_at" in data


def test_create_booking_invalid_email(client):
    r = client.post(f"{API}/bookings", json={
        "name": "TEST_Bad",
        "email": "not-an-email",
        "whatsapp": "+15550001234",
    })
    assert r.status_code == 422


def test_create_booking_missing_required(client):
    r = client.post(f"{API}/bookings", json={"name": "TEST_NoEmail"})
    assert r.status_code == 422


def test_list_bookings(client):
    # Insert one to ensure list is non-empty
    client.post(f"{API}/bookings", json={
        "name": "TEST_Listing",
        "email": "TEST_list@example.com",
        "whatsapp": "+15550009999",
    })
    r = client.get(f"{API}/bookings")
    assert r.status_code == 200
    items = r.json()
    assert isinstance(items, list)
    assert len(items) >= 1
    for it in items:
        assert "_id" not in it
        assert "id" in it
        assert "created_at" in it
    # Verify desc sort by created_at
    if len(items) >= 2:
        assert items[0]["created_at"] >= items[1]["created_at"]
