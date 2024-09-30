import React from 'react';
import { Card, Button } from 'antd';
import "./projectCard.css"; 
import NewLogo1 from '../assets/landingPage/NewLogo1.svg';
const ProjectCard = () => {
  return (
    <Card className="project-card" bordered={false} style={{ padding: 0 }}>
      <div className="card-header">
        <img
          src={NewLogo1} 
          alt="Project Logo"
          className="project-logo"
        />
        <h2 className="project-name">Trix</h2>
      </div>
      <div className="card-content">
        <div className="details">
          <div className="detail-item">
            <span>Project</span>
            <p>Trix</p>
          </div>
          <div className="detail-item">
            <span>Round Price</span>
            <p>$0.12</p>
          </div>
        </div>
        <div className="round-info">
          <div className="round-item">
            <span>Round</span>
            <p>1/4</p>
          </div>
          <div className="round-item">
            <span>Sales Started From</span>
            <p>23 April, 2024</p>
          </div>
        </div>
      </div>
      <Button className="buy-button" type="primary" size="large">
        Buy Trix
      </Button>
    </Card>
  );
}

export default ProjectCard;
