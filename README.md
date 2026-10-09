# BMI Calculator

A simple and beginner-friendly **BMI (Body Mass Index) Calculator** built using HTML, CSS, and JavaScript. Enter your weight in kilograms and height in meters to calculate your BMI and view the corresponding weight-status category.

## Features

- Enter weight in kilograms (kg).
- Enter height in meters (m).
- Calculate BMI using JavaScript.
- Display the BMI value rounded to two decimal places.
- Show a weight-status category:
  - Underweight
  - Normal
  - Overweight
  - Obese
- Simple interface styled with CSS, including a gradient calculator card and hover effect on the button.

## Technologies Used

- **HTML5** — page structure and input fields
- **CSS3** — layout, colors, and styling
- **JavaScript** — BMI calculation and status display
- **Google Fonts (Poppins)** — typography

## BMI Formula

BMI is calculated using the following formula:

```text
BMI = weight (kg) / height (m)²
```

**Example:** If your weight is 70 kg and your height is 1.75 m:

```text
BMI = 70 / (1.75 × 1.75)
BMI = 22.86
```

## BMI Categories Used in This Project

| BMI value | Status |
| --- | --- |
| Below 18.5 | Underweight |
| 18.5 to below 24.9 | Normal |
| 24.9 to below 29.9 | Overweight |
| 29.9 and above | Obese |

*Note: These ranges reflect the conditions currently implemented in this project's JavaScript. This calculator is for educational purposes and is not a medical diagnosis.*

## Project Structure

```text
bmi-calculator/
├── index.html
├── style.css
├── script.js
└── README.md
```

Make sure the filenames in the project match the paths referenced by `index.html`. The HTML currently links to `style.css` and `script.js`.

## How to Run Locally

1. Download or clone this project.
2. Keep `index.html`, `style.css`, and `script.js` in the same folder.
3. Open `index.html` in your web browser.
4. Enter your weight in kilograms.
5. Enter your height in meters (for example, `1.75`).
6. Click **Calculate BMI** to see the result and status.

No package installation or build step is required.

## Current Limitations

- The calculator currently assumes the entered height is in meters.
- Input validation for empty, zero, or negative values has not been implemented.
- BMI categories are based on the conditions currently present in the JavaScript.

## Future Improvements

- Add validation for empty and invalid inputs.
- Show a helpful message when height or weight is invalid.
- Improve responsiveness for smaller screens.
- Add a clear/reset button.

## License

This project is intended for learning and practice. Add a license if you plan to distribute it publicly.
