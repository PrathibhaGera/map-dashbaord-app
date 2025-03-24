import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";

class Dashboard extends Component {
  state = {
    cards: [],
    error: "",
  };

  componentDidMount() {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:5000/api/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        this.setState({ cards: response.data });
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);

        this.setState({
          error:
            error.response?.data?.message || "Failed to load dashboard data",
        });
      });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="dashboard-container">
          <h1>Dashboard</h1>

          {this.state.error && (
            <p style={{ color: "red" }}>{this.state.error}</p>
          )}

          <div className="dashboard-grid">
            {this.state.cards.map((card) => (
              <div key={card.id} className="card">
                <h3>Card {card.id}</h3>
                <p>{card.title}</p>
                <Link to={`/map/${card.id}`}>
                  <button>View Map</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
