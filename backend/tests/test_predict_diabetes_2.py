# tests/test_predict_capitalized.py
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_predict_diabetes_2():
    response = client.post("/predict-diabetes", json={
        "pregnancies": 5,
        "glucose": 180,
        "blood_pressure": 90,
        "skin_thickness": 35,
        "insulin": 200,
        "bmi": 38.0,
        "diabetes_pedigree": 2.0,
        "age": 55
    })
    print(response.json())
    assert response.status_code == 200
    assert "prediction" in response.json()