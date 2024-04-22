import React, { useState } from "react";
import { Collapse, Input, Progress, Space, Steps, Table } from "antd";
import "./GenAI.css";
import Bot from "../../assets/Cyber/ChatBot.svg";
import Default from "../../assets/Cyber/Question.svg";
import avatar from "../../assets/Cyber/Avatar.svg";

interface Item {
  key: string;
  label: string;
  children: React.ReactNode;
  extra: React.ReactNode;
}

const GenAI: React.FC = () => {
  const [prevHistory, setPrevHistory] = useState<boolean>(true);
  const [question, setQuestion] = useState<string>();

  const columns = [
    {
      title: "CVE ID",
      dataIndex: "CVE_ID",
      align: "center" as const,
    },
    {
      title: "Description",
      dataIndex: "Description",
      align: "center" as const,
    },
    {
      title: "Exploit Status",
      dataIndex: "Exploit_Status",
      align: "center" as const,
    },
    {
      title: "Hosts",
      dataIndex: "Hosts",
      align: "center" as const,
    },
    {
      title: "Remeditions",
      dataIndex: "Remeditions",
      align: "center" as const,
    },
  ];

  const Data = [
    {
      CVE_ID: "CVE-2017-11774",
      Description: "Microsoft Outlook 2010 SP2,...",
      Exploit_Status: "Actively used(CRITICAL)",
      Hosts: "231",
      Remeditions: "1",
    },
    {
      CVE_ID: "CVE-2023-23397",
      Description: "Microsoft Outlook Evolutio.....",
      Exploit_Status: "Actively used(CRITICAL)",
      Hosts: "231",
      Remeditions: "2",
    },
    {
      CVE_ID: "CVE-2010-0266",
      Description: "Microsoft Office Outlook 20....",
      Exploit_Status: "Actively used(CRITICAL)",
      Hosts: "12",
      Remeditions: "3",
    },
  ];

  const handleSearch = () => {
    if (!question) {
      // Handle the case where question is undefined
      return;
    }
  
    setPrevHistory(false);
    const lowerCaseQuestion:any = question.toLowerCase();
    if (lowerCaseQuestion.includes("microsoft")) {
      setItems((prevState:any) => [
        ...prevState,
        {
          key: "1",
          label: "Do we have Vulnerabilities involving Microsoft outlook? ",
          children: (
            <div>
              <div className="subheading">
                <p>
                  Yes, Microsoft Outlook Has 3 Critical Vulnerabilities across
                  231 devices
                </p>
                {/*<p>09:23:05 27-05-2023</p>*/}
              </div>
              <Table className="mt-5" dataSource={Data} columns={columns} />
            </div>
          ),
          extra: genExtra(),
        },
      ]);
    } else if (lowerCaseQuestion.includes("threat")) {
      setItems((prevState:any) => [
        ...prevState,
        {
          key: "2",
          label: "Which threat actors target us?",
          children: (
            <div>
              <div className="subheading">
                <p>
                  Detections has been observer in your environment attributed to
                  6 Actors. Most recently BITWISE SPIDER wasobserved in May
                  2023.
                </p>
                <p className={"mt-2"}>
                  LABYRINTH CHOLLIMA, FANCY BEAR, WIZARD SPIDER, BERSERK BEAR,
                  PINCHY SPIDER have also been observed in the past 12 months.
                </p>
              </div>
              <div className={"d-flex gap-5 mt-3"} style={{ width: "100%" }}>
                <div>
                  <img src={avatar} height={200} alt=""/>
                  <p
                    className={"mt-2 subheading d-flex justify-content-center"}
                  >
                    BITWISE SPIDER
                  </p>
                </div>
                <div className={"d-grid mt-3 gap-2"} style={{ width: "100%" }}>
                  <div className={"row"} style={{ width: "100%" }}>
                    <div className={"col-sm"}>
                      <p>Last Active</p>
                      <p className={"subheading"}>May 2023</p>
                    </div>
                    <div className={"col-sm"}>
                      <p>Status</p>
                      <p className={"subheading"}>Active</p>
                    </div>
                    <div className={"col-sm"}>
                      <p>Origin</p>
                      <p className={"subheading"}>Unknown</p>
                    </div>
                    <div className={"col-sm"}>
                      <p>Actor Type</p>
                      <p className={"subheading"}>eCrime</p>
                    </div>
                  </div>
                  <div className={"row"} style={{ width: "100%" }}>
                    <div className={"col-sm"}>
                      <p>Intel reports</p>
                      <p className={"subheading"}>317</p>
                    </div>
                    <div className={"col-sm"}>
                      <p>Target Industries</p>
                      <p className={"subheading"}>37</p>
                    </div>
                    <div className={"col-sm"}>
                      <p>Target Countries</p>
                      <p className={"subheading"}>37</p>
                    </div>
                    <div className={"col-sm"}>
                      <p>Motivation</p>
                      <p className={"subheading"}>Criminal</p>
                    </div>
                  </div>
                  <div className={"row"} style={{ width: "100%" }}>
                    <div className={"col-sm"}>
                      <p>Community Identifiers</p>
                      <p className={"subheading"}>
                        LockBit, LockBitSupp, StealBit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"mt-2"}>
                <a href="#image">
                  <p style={{ textAlign: "end" }}>
                    Know more about Bitwise Spider{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                    >
                      <path
                        d="M16.7373 1.5H22.0005V6.76316"
                        stroke="black"
                        strokeWidth="2.54"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.9474 13.079V19.3948C20.9474 20.5575 20.0048 21.5 18.8421 21.5H4.10526C2.94256 21.5 2 20.5575 2 19.3948V4.65794C2 3.49523 2.94256 2.55267 4.10526 2.55267H10.4211"
                        stroke="black"
                        strokeWidth="2.54"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.5264 10.9737L21.4737 2.02631"
                        stroke="black"
                        strokeWidth="2.54"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </p>
                </a>
              </div>
            </div>
          ),
          extra: genExtra(),
        },
      ]);
    } else if (lowerCaseQuestion.includes("windows")) {
      setItems((prevState) => [
        ...prevState,
        {
          key: "3",
          label: "Find Lateral movements involving windows hosts.",
          children: (
            <div>
              <div className="subheading">
                <p>
                  There is one critical incident in progress where lateral
                  movement was observed
                </p>
                {/*<p>09:23:05 27-05-2023</p>*/}
              </div>
              <div className={"row mt-5"}>
                <div className={"col-3"}>
                  <p className={"subheading text-center"}>Critical Score</p>
                  <Progress
                    type="circle"
                    percent={90}
                    aria-label={"9/10"}
                    aria-labelledby={"9/10"}
                    width={200}
                    strokeWidth={15}
                    strokeColor="#FF7A7A"
                    className="d-flex justify-content-center mt-4"
                  />
                </div>
                <div className={"col-4"}>
                  <p className={"subheading "}>Directions</p>
                  <div className={"row justify-content-evenly mt-4"}>
                    <div className={"col-2"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="21"
                        viewBox="0 0 19 21"
                        fill="none"
                      >
                        <path
                          d="M9.5 0L18.5933 5.25V15.75L9.5 21L0.406734 15.75V5.25L9.5 0Z"
                          fill="#204496"
                        />
                      </svg>
                    </div>
                    <p className={"subheading col-7"}>
                      Defensive Evasian via Indic...
                    </p>
                    <p className={"subheading col-3"}>28</p>
                  </div>
                  <div className={"row justify-content-evenly mt-4"}>
                    <div className={"col-2"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="21"
                        viewBox="0 0 19 21"
                        fill="none"
                      >
                        <path
                          d="M9.5 0L18.5933 5.25V15.75L9.5 21L0.406734 15.75V5.25L9.5 0Z"
                          fill="#204496"
                        />
                      </svg>
                    </div>
                    <p className={"subheading col-7"}>
                      Defensive Evasian via Indic...
                    </p>
                    <p className={"subheading col-3"}>28</p>
                  </div>
                  <div className={"row justify-content-evenly mt-4"}>
                    <div className={"col-2"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="21"
                        viewBox="0 0 19 21"
                        fill="none"
                      >
                        <path
                          d="M9.5 0L18.5933 5.25V15.75L9.5 21L0.406734 15.75V5.25L9.5 0Z"
                          fill="#204496"
                        />
                      </svg>
                    </div>
                    <p className={"subheading col-7"}>
                      Defensive Evasian via Indic...
                    </p>
                    <p className={"subheading col-3"}>28</p>
                  </div>
                  <div className={"row justify-content-evenly mt-4"}>
                    <div className={"col-2"}></div>
                    <p className={"subheading col-7"}>Total</p>
                    <p className={"subheading col-3"}>156</p>
                  </div>
                </div>
                <div className={"col-5"}>
                  <p className={"subheading "}>Host</p>
                  <div className={"row justify-content-evenly mt-4"}>
                    <div className={"col-6"}>
                      <p>Host Name</p>
                      <p className={"subheading mt-1"}>SE-ILO-WIN..(+1 host)</p>
                    </div>
                    <div className={"col-6"}>
                      <p>Operating System</p>
                      <p className={"subheading mt-1"}>Windows 10</p>
                    </div>
                  </div>
                  <div className={"row justify-content-evenly mt-4"}>
                    <div className={"col-6"}>
                      <p>External IP Address</p>
                      <p className={"subheading mt-1"}>193.29.61.177</p>
                    </div>
                    <div className={"col-6"}>
                      <p>Local IP Address</p>
                      <p className={"subheading mt-1"}>172.17.0a.26</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="subheading mt-3">
                <p>Timeline</p>
                {/*<p>09:23:05 27-05-2023</p>*/}
              </div>
              <Steps
                className={"mt-2"}
                current={1}
                items={[
                  {
                    title: "Finished",
                  },
                  {
                    title: "In Progress",
                  },
                  {
                    title: "Waiting",
                  },
                  {
                    title: "Waiting",
                  },
                ]}
              />
            </div>
          ),
          extra: genExtra(),
        },
      ]);
    } else {
       
    }
   
  };

 const genExtra = () => (
    <div className={"d-flex gap-4"}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M24.9987 10.0001C23.1422 5.291 18.9029 2 13.97 2C8.69484 2 4.21254 5.7635 2.58984 11"
            stroke="#204496"
            strokeWidth="2.43"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.9863 10.3168H24.2013C25.1955 10.3168 26.0013 9.51074 26.0013 8.51683V3.64993"
            stroke="#204496"
            strokeWidth="2.43"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 17.9999C4.8564 22.709 9.096 26 14.0289 26C19.3041 26 23.7861 22.2365 25.4088 17"
            stroke="#204496"
            strokeWidth="2.43"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.0147 17.6832H3.8C2.8058 17.6832 2 18.4893 2 19.4832V24.3501"
            stroke="#204496"
            strokeWidth="2.43"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
        >
          <path
            d="M10.3209 9.24544L13.602 2.63633C14.0231 1.78789 15.2401 1.78789 15.6612 2.63633L18.9422 9.24544L26.2798 10.3118C27.2212 10.4486 27.5964 11.5992 26.9149 12.2592L21.6064 17.4002L22.8592 24.6628C23.0201 25.5956 22.0355 26.3067 21.1931 25.8663L14.6316 22.4354L8.07007 25.8663C7.22771 26.3067 6.24307 25.5956 6.40394 24.6628L7.65674 17.4002L2.34832 12.2592C1.66674 11.5992 2.04196 10.4486 2.9834 10.3118L10.3209 9.24544Z"
            stroke="#204496"
            strokeWidth="2.43"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="28"
          viewBox="0 0 25 28"
          fill="none"
        >
          <path
            d="M1.26367 6.8H22.8637M3.66367 6.8V23.6C3.66367 24.9255 4.73819 26 6.06367 26H18.0637C19.3892 26 20.4637 24.9255 20.4637 23.6V6.8M7.26367 6.8V4.4C7.26367 3.07452 8.33819 2 9.66367 2H14.4637C15.7892 2 16.8637 3.07452 16.8637 4.4V6.8"
            stroke="#204496"
            strokeWidth="2.43"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.4629 12.8V20"
            stroke="#204496"
            strokeWidth="2.43"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.66406 12.8V20"
            stroke="#204496"
            strokeWidth="2.43"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );

  const [items, setItems] = useState<Item[]>([]);
  
  return (
    <div className="mt-5 background-bot pb-4">
      <h5 className="py-3 fw-bold text-center card-header">
        <img src={Bot} height={40} alt="" />
      </h5>
      <div className="container-xxl mt-3">
        <Input
          onChange={(e) => {
            setQuestion(e?.target?.value);
          }}
          onPressEnter={(e) => {
            handleSearch();
          }}
          className="shadow-sm"
          size={"large"}
          placeholder={"Start the conversation..."}
          suffix={
            <svg
              onClick={(e) => {
                handleSearch();
              }}
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
            >
              <path
                d="M27.7993 13.8999L3.00349 1.50198C2.16693 1.0837 1.26523 1.94034 1.64011 2.79722L6.49747 13.8999M27.7993 13.8999L3.00346 26.2977C2.1669 26.716 1.26521 25.8594 1.64009 25.0025L6.49747 13.8999M27.7993 13.8999L6.49747 13.8999"
                stroke="#BCBCBC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
      </div>
      <div>
        {prevHistory && (
          <div className="container-sm shadow-lg mt-10 card p-5">
            <img src={Default} height={550} alt="" />
          </div>
        )}
        {!prevHistory && (
          <div className={"container-sm mt-10"}>
            <Space style={{ width: "100%" }} direction="vertical">
              <Collapse
                expandIcon={({ isActive }) => (
                  <svg
                    transform={`rotate(${isActive ? "90" : "0"})`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="28"
                    viewBox="0 0 16 28"
                    fill="none"
                  >
                    <path
                      d="M1.99976 26.0002L13.9998 14.0002L1.99976 2.00024"
                      stroke="#204496"
                      strokeWidth="2.43"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                size={"large"}
                expandIconPosition={"end"}
                collapsible="header"
                activeKey={['1','2','3']}
                items={items}
              />
            </Space>
          </div>
        )}
      </div>
    </div>
  );
};
export default GenAI;

