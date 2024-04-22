import React, { useState } from "react";
import { Form, Input, Row, Col } from "antd";
import Button from "../Buttons/Button";
import { useNavigate, useLocation } from "react-router-dom";
import './PatientView.css'

const TreatmentPlanning = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useState({
    patientId: queryParams.get("patientId") || "",
    PatientName: queryParams.get("PatientName") || "",
    Age: queryParams.get("Age") || "",
    Doctor: queryParams.get("Doctor") || "",
    Consultant: queryParams.get("Consultant") || "",
    Department: queryParams.get("Department") || "",
  });

  const handleInputChange = (field:any, value:any) => {
    setSearchParams({
      ...searchParams,
      [field]: value,
    });
  };

  const handleSearch = () => {
    navigate(`/cpp/PatientView?search=${JSON.stringify(searchParams)}`);
  };

  return (
    <div className="Treatment-backgrounds">
      <Form layout="vertical">
        <h6 className="p-0 mt-4">Patient Search</h6>
        <hr />
        <Row gutter={32}>
          <Col span={8}>
            <Form.Item label="Patient Id:">
              <Input
                placeholder="Enter the Patient Id"
                onChange={(e) => handleInputChange("patientId", e.target.value)}
                value={searchParams.patientId}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Patient Name:">
              <Input
                placeholder="Enter the Patient Name"
                onChange={(e) => handleInputChange("PatientName", e.target.value)}
                value={searchParams.PatientName}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Patient Age:">
              <Input
                placeholder="Enter the Patient Age"
                onChange={(e) => handleInputChange("Age", e.target.value)}
                value={searchParams.Age}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col span={12}>
            <Form.Item label="Doctor Name:">
              <Input
                placeholder="Enter the Doctor's Name"
                onChange={(e) => handleInputChange("Doctor", e.target.value)}
                value={searchParams.Doctor}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Consultant Name:">
              <Input
                placeholder="Enter the consultant's Name"
                onChange={(e) => handleInputChange("Consultant", e.target.value)}
                value={searchParams.Consultant}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col span={12}>
            <Form.Item label="Department Name:">
              <Input
                placeholder="Enter the Department Name"
                onChange={(e) => handleInputChange("Department", e.target.value)}
                value={searchParams.Department}
              />
            </Form.Item>
          </Col>
          <Col span={6}></Col>
          <Col span={6}>
            <Form.Item>
              <div className="d-flex justify-content-end mt-3">
                <Button onClick={handleSearch}>Search</Button>
              </div>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default TreatmentPlanning;
