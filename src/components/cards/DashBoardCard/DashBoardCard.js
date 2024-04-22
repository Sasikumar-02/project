import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "antd";
import notepad from "../../../assets/DashBoardCardIcons/Notepad.svg";
import Bed from "../../../assets/DashBoardCardIcons/Bed.svg";
import Currency from "../../../assets/DashBoardCardIcons/CurrencyCircleDollar.svg";
import Calendar from "../../../assets/DashBoardCardIcons/Calendar.svg";
import users from "../../../assets/DashBoardCardIcons/Users.svg";
import Icu from "../../../assets/DashBoardCardIcons/Layer_2_1_.svg";
import Died from "../../../assets/DashBoardCardIcons/g3720.svg";
import user from "../../../assets/DashBoardCardIcons/User.svg";
import '../DashBoardCard/DashBoardCard.css'

const Homecard = ({data}) => {
  

  
  const cardData = [
    {
      Title: "Total Appointments",
      Image: notepad,
      value: data?.TotalAppointments,
    },
    {
      Title: "Available Beds",
      Image: Bed,
      value:  data?.AvailableBeds,
    },
    {
      Title: "General Income",
      Image: Currency,
      value: data?.GeneralIncome
      ,
    },
    {
      Title: "Avg days of Discharge",
      Image: Calendar,
      value: data?.AvgDischarge,
    },
    {
      Title: "Total Patients",
      Image: users,
      value: data?.TotalPatients,
    },
    {
      Title: "Patients in ICU",
      Image: Icu,
      value: data?.IcuPatients      ,
    },
    {
      Title: "Total Death Case",
      Image: Died,
      value: data?.Deathcase,
    },
    {
      Title: "Readmit Patients",
      Image: user,
      value:data?.Readmitpatients,
    },
  ];

  return (
    <div className="d-flex flex-wrap gap-3">
      {cardData.map((cardItem, index) => (
        <Card key={index} style={{ width: "297px", height: "100px" }}>
          <Row>
            <Col span={8}>
              {/* <div style={{borderRadius:'6px',background:'#FFEBEB'}}> */}
              <img
                src={cardItem.Image}
                alt={cardItem.Title}
                style={{ marginTop: "20px" }}
              />
              {/* </div> */}
            </Col>
            <Col span={16}>
              <div>
                <p
                  style={{
                    color: "#51505D",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {cardItem.Title}
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "400px",
                    color: "#204496",
                  }}
                >
                  {cardItem.value}
                </p>
              </div>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
};

export default Homecard;
