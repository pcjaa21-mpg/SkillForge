import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./Progress.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function Progress() {
    const navigate = useNavigate();

    const labels = [
        "C", "C++", "Java", "Python",
        "JavaScript", "TypeScript", "C#", "Go", "Rust", "SQL"
    ];

    const courseCompletion = [70, 50, 85, 60, 75, 40, 55, 30, 20, 90];
    const examScores = [68, 72, 85, 90, 78, 60, 74, 55, 48, 88];

    // 🔥 Calculate Overall Performance
    const avgCompletion =
        courseCompletion.reduce((a, b) => a + b, 0) / courseCompletion.length;

    const avgExam =
        examScores.reduce((a, b) => a + b, 0) / examScores.length;

    const overallPerformance = ((avgCompletion + avgExam) / 2).toFixed(1);

    // 📊 Weekly Overall Performance Data (All Courses Combined)
    const weeklyData = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
        datasets: [
            {
                label: "Weekly Overall Performance (%)",
                data: [65, 70, 75, 80, 85],
                backgroundColor: "rgba(54, 162, 235, 0.7)",
            },
        ],
    };

    const courseData = {
        labels: labels,
        datasets: [
            {
                label: "Completion %",
                data: courseCompletion,
                backgroundColor: "rgba(76, 175, 80, 0.7)",
            },
        ],
    };

    const examData = {
        labels: labels,
        datasets: [
            {
                label: "Exam Score (%)",
                data: examScores,
                backgroundColor: "rgba(255, 99, 132, 0.7)",
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
            },
        },
    };

    return (
        <div className="progress-page">

            <div className="progress-header">
                <h2>📊 Your Learning Progress</h2>
                <button onClick={() => navigate("/dashboard")}>
                    ⬅ Back to Dashboard
                </button>
            </div>

            {/* 🔥 Overall Performance */}
            <div className="overall-performance">
                <h3>Overall Performance (All Courses)</h3>
                <div className="overall-box">
                    {overallPerformance}%
                </div>
                <p>Based on average course completion and exam scores.</p>
            </div>

            {/* 📊 Weekly Overall Performance */}
            <div className="chart-container">
                <h3>Weekly Overall Performance</h3>
                <div style={{ height: "320px" }}>
                    <Bar data={weeklyData} options={options} />
                </div>
            </div>

            {/* 📚 Course Completion */}
            <div className="chart-container" style={{ marginTop: "40px" }}>
                <h3>Course Completion</h3>
                <div style={{ height: "320px" }}>
                    <Bar data={courseData} options={options} />
                </div>
            </div>

            {/* 📝 Exam Performance */}
            <div className="chart-container" style={{ marginTop: "40px" }}>
                <h3>Exam Performance (Course Wise)</h3>
                <div style={{ height: "320px" }}>
                    <Bar data={examData} options={options} />
                </div>
            </div>

        </div>
    );
}

export default Progress;