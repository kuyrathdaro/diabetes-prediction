from pydantic import BaseModel, Field, ConfigDict

class DiabetesInput(BaseModel):
    model_config = ConfigDict(coerce_numbers_to_str=True)

    Pregnancies: int = Field(..., alias="pregnancies")
    Glucose: int = Field(..., alias="glucose")
    BloodPressure: int = Field(..., alias="blood_pressure")
    SkinThickness: int = Field(..., alias="skin_thickness")
    Insulin: int = Field(..., alias="insulin")
    BMI: float = Field(..., alias="bmi")
    DiabetesPedigreeFunction: float = Field(..., alias="diabetes_pedigree")
    Age: int = Field(..., alias="age")