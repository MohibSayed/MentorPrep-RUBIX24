import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './AnalyseMentorProfile.css'

const AnalyseMentorProfile = () => {
  // Sample data for the charts
  const ageChartData = {
    labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
    datasets: [
      {
        data: [15, 25, 20, 18, 22],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800'],
      },
    ],
  };

  const genderChartData = {
    labels: ['Male', 'Female', 'Other'],
    datasets: [
      {
        data: [45, 50, 5],
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
      },
    ],
  };

  const incomeChartData = {
    labels: ['Low', 'Medium', 'High'],
    datasets: [
      {
        data: [30, 45, 25],
        backgroundColor: ['#FFCE56', '#4CAF50', '#FF9800'],
        hoverBackgroundColor: ['#FFCE56', '#4CAF50', '#FF9800'],
      },
    ],
  };

  return (
    <div className="wrapper">
      <header>
        <h1>Breakdown of Pretend News Paper Readership</h1>
      </header>
      <div className="container">
        <div className="third widget">
          <h2>Readership by Age Group</h2>
          <div className="canvas-container">
            <Doughnut data={ageChartData} />
          </div>
        </div>

        <div className="third widget">
          <h2>Readership by Gender</h2>
          <div className="canvas-container">
            <Doughnut data={genderChartData} />
          </div>
        </div>

        <div className="third widget">
          <div className="chart-legend">
            <h2>Readership by Income</h2>
          </div>
          <div className="canvas-container">
            <Doughnut data={incomeChartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyseMentorProfile;