# Diabetes Prediction

A full-stack web application for predicting diabetes using the PIMA Diabetes Dataset.  
This project features a FastAPI backend for machine learning inference and a Nuxt 3 frontend with IndexedDB-powered history, modern UI, and responsive design.

---

## Features

- **Frontend (Nuxt 3 + Nuxt UI + Pinia)**
  - User-friendly form for diabetes prediction input
  - Displays prediction results with clear visual feedback
  - History of predictions stored locally in IndexedDB (even after reload)
  - Responsive, modern UI with Nuxt UI Table and badge styles
  - Ability to clear prediction history

- **Backend (FastAPI)**
  - REST API for diabetes prediction
  - Uses a trained model on the PIMA Diabetes Dataset
  - Handles input validation and error reporting

---

## Tech Stack

- **Frontend:** Nuxt 3, Nuxt UI, Pinia, IndexedDB (via idb), TypeScript
- **Backend:** FastAPI, Python, scikit-learn (or similar ML library)
- **Other:** Docker support, modern best practices

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Python 3.8+
- Docker (optional, for containerized deployment)

---

### Backend Setup

1. **Install dependencies:**
    ```bash
    cd backend
    pip install -r requirements.txt
    ```

2. **Run FastAPI server:**
    ```bash
    uvicorn main:app --reload
    ```

3. **API will be available at:**  
   `http://localhost:8000`

---

### Frontend Setup

1. **Install dependencies:**
    ```bash
    cd frontend
    npm install
    ```

2. **Run Nuxt development server:**
    ```bash
    npm run dev
    ```

3. **App will be available at:**  
   `http://localhost:3000`

---

### Docker (Optional)

- You can use the provided Dockerfiles to build and run both frontend and backend containers.
- Make sure to check `.dockerignore` files for optimized builds.

---

## Usage

1. Open the frontend in your browser.
2. Fill in the form with patient data.
3. Submit to get a prediction (Diabetic / Not Diabetic).
4. View your prediction history in the History tab/page.
5. Clear history if needed.

---

## Project Structure

```
diabetes-prediction/
├── backend/         # FastAPI backend
│   ├── main.py
│   └── ...
├── frontend/        # Nuxt 3 frontend
│   ├── components/
│   ├── pages/
│   ├── stores/
│   └── ...
└── README.md
```

---

## Customization

- **Model:** Replace or retrain the ML model in the backend as needed.
- **UI:** Adjust Nuxt UI components and table columns to fit your data.
- **Persistence:** IndexedDB is used for local history; you can extend this for user accounts or remote storage.

---

## License

GPL

---

## Disclaimer

This project is intended for educational and demonstration purposes only.  
**It is not a medical device and should not be used for real medical diagnosis or treatment.**  
Always consult a qualified healthcare professional for medical advice.

---

## Acknowledgements

- [PIMA Diabetes Dataset](https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database)
- [FastAPI](https://fastapi.tiangolo.com/)
- [Nuxt 3](https://nuxt.com/)
- [Nuxt UI](https://ui.nuxt.com/)