from django.test import Client


def test_health_ok_v1():
    client = Client()
    resp = client.get("/api/v1/health/")
    assert resp.status_code == 200
    data = resp.json()
    assert data.get("status") == "ok"
    assert data.get("version") == "v1"
