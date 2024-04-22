import React from "react";
import { Card, Row, Col, Pagination } from "antd";
import { useState } from "react";
import Arrow from "../assets/TravelTime/Arrow 2.svg";
import Food from "../assets/TravelTime/spaghetti 7.svg";
import Security from "../assets/TravelTime/security 6.svg";
import Conveyor from "../assets/TravelTime/conveyor 6.svg";

const cardColors = ["#FFEBD0", "#D0F7FF", "#FBFFD0"];
const Traveltime: React.FC<{ data: any }> = ({ data }) => {
  const cardPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * cardPerPage;
  const endIndex = startIndex + cardPerPage;

  const currentCards = data?.slice(startIndex, endIndex);

  const handlePageChange = (page:any) => {
    setCurrentPage(page);
  };

  return (
    <>
      {currentCards?.map((travel:any, index:any) => (
        <Card key={index} className="mt-2" bodyStyle={{ padding: "0px" }}>
          <Row justify="space-between">
            <Col
              span={9}
              className="d-flex flex-column justify-content-center align-items-center py-4"
              style={{ backgroundColor: cardColors[index % cardColors.length] }}
            >
              <Row>
                <Col>
                  <h5
                    style={{
                      fontWeight: "700",
                      fontSize: "18px",
                      marginTop: "15px",
                    }}
                  >
                    {travel?.TravelDetails?.TravelOrigin}
                  </h5>
                </Col>
                <Col>
                  <p style={{ marginLeft: "45px" }}>
                    {" "}
                    {travel?.TravelDetails?.LatestDate}
                  </p>
                  <img className="px-5" src={Arrow} alt="" />
                </Col>
                <Col>
                  <h5
                    style={{
                      fontWeight: "700",
                      fontSize: "18px",
                      marginTop: "15px",
                    }}
                  >
                    {travel?.TravelDetails?.TravelDestination}
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col
              span={7}
              style={{ borderRight: "1px solid #DBDBDB" }}
              className="py-2"
            >
              <div className="d-flex  align-items-center">
                <img style={{ width: "10%" }} src={Conveyor} alt="" />
                <p>{travel?.BaggageAllowance}</p>
              </div>
              <div className="d-flex  align-items-center">
                <img style={{ width: "10%" }} src={Security} alt="" />
                <p>Travel Insurance - {travel?.TravelInsuranceStatus}</p>
              </div>
            </Col>

            <Col span={4} className="d-flex align-items-center">
              <h4 style={{ fontWeight: "700", fontSize: "18px" }}>
                PHP {travel?.TotalRevenue}
              </h4>
            </Col>
          </Row>
        </Card>
      ))}
      <div className="d-flex justify-content-end py-3">
        <Pagination
          defaultCurrent={1}
          current={currentPage}
          total={data?.length}
          pageSize={cardPerPage}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Traveltime;
