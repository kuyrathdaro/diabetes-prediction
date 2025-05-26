from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_predict_diabetes_1():
    response = client.post("/predict-diabetes", json={
        "pregnancies": 2,
        "glucose": 130,
        "blood_pressure": 70,
        "skin_thickness": 20,
        "insulin": 85,
        "bmi": 25.1,
        "diabetes_pedigree": 0.5,
        "age": 31
    })
    print(response.json())  # <--- Add this line
    assert response.status_code == 200
    assert "prediction" in response.json()
