import React, { useEffect } from "react";
import { Layout as MainLayout } from "antd";
import { Link, useLocation } from "react-router-dom";
import { PerformanceWhite } from "../../assets/Icons";

const { Sider } = MainLayout;

interface NavItem {
  label: string;
  link: string;
  icon: JSX.Element;
  submenus?: {
    label: string;
    link: string;
    icon: JSX.Element;
    
  }[];
}

let navItems: NavItem[] = [
  {
    label: "DashBoard",
    link: "/cpp/newhome",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.75 8.25V3.75H8.25V8.25H3.75ZM1.5 3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H9C9.39782 1.5 9.77936 1.65804 10.0607 1.93934C10.342 2.22064 10.5 2.60218 10.5 3V9C10.5 9.39782 10.342 9.77936 10.0607 10.0607C9.77936 10.342 9.39782 10.5 9 10.5H3C2.60218 10.5 2.22064 10.342 1.93934 10.0607C1.65804 9.77936 1.5 9.39782 1.5 9V3ZM13.5 3.375C13.5 3.07663 13.6185 2.79048 13.8295 2.5795C14.0405 2.36853 14.3266 2.25 14.625 2.25H21.375C21.6734 2.25 21.9595 2.36853 22.1705 2.5795C22.3815 2.79048 22.5 3.07663 22.5 3.375C22.5 3.67337 22.3815 3.95952 22.1705 4.1705C21.9595 4.38147 21.6734 4.5 21.375 4.5H14.625C14.3266 4.5 14.0405 4.38147 13.8295 4.1705C13.6185 3.95952 13.5 3.67337 13.5 3.375ZM14.625 7.5C14.3266 7.5 14.0405 7.61853 13.8295 7.8295C13.6185 8.04048 13.5 8.32663 13.5 8.625C13.5 8.92337 13.6185 9.20952 13.8295 9.4205C14.0405 9.63147 14.3266 9.75 14.625 9.75H21.375C21.6734 9.75 21.9595 9.63147 22.1705 9.4205C22.3815 9.20952 22.5 8.92337 22.5 8.625C22.5 8.32663 22.3815 8.04048 22.1705 7.8295C21.9595 7.61853 21.6734 7.5 21.375 7.5H14.625ZM3.75 15.75V20.25H8.25V15.75H3.75ZM3 13.5C2.60218 13.5 2.22064 13.658 1.93934 13.9393C1.65804 14.2206 1.5 14.6022 1.5 15V21C1.5 21.3978 1.65804 21.7794 1.93934 22.0607C2.22064 22.342 2.60218 22.5 3 22.5H9C9.39782 22.5 9.77936 22.342 10.0607 22.0607C10.342 21.7794 10.5 21.3978 10.5 21V15C10.5 14.6022 10.342 14.2206 10.0607 13.9393C9.77936 13.658 9.39782 13.5 9 13.5H3ZM14.625 14.25C14.3266 14.25 14.0405 14.3685 13.8295 14.5795C13.6185 14.7905 13.5 15.0766 13.5 15.375C13.5 15.6734 13.6185 15.9595 13.8295 16.1705C14.0405 16.3815 14.3266 16.5 14.625 16.5H21.375C21.6734 16.5 21.9595 16.3815 22.1705 16.1705C22.3815 15.9595 22.5 15.6734 22.5 15.375C22.5 15.0766 22.3815 14.7905 22.1705 14.5795C21.9595 14.3685 21.6734 14.25 21.375 14.25H14.625ZM14.625 19.5C14.3266 19.5 14.0405 19.6185 13.8295 19.8295C13.6185 20.0405 13.5 20.3266 13.5 20.625C13.5 20.9234 13.6185 21.2095 13.8295 21.4205C14.0405 21.6315 14.3266 21.75 14.625 21.75H21.375C21.6734 21.75 21.9595 21.6315 22.1705 21.4205C22.3815 21.2095 22.5 20.9234 22.5 20.625C22.5 20.3266 22.3815 20.0405 22.1705 19.8295C21.9595 19.6185 21.6734 19.5 21.375 19.5H14.625Z"
          fill="#C1C1C1"
        />
      </svg>
    ),
  },
    {
      label: "Sales 360",
      link: "/cpp/sales",
      icon: <PerformanceWhite />,
    },
    {
      label: "Queue 360",
      link: "/cpp/productSupport",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 18L15 15M9 9L6 6M15 9L18 6M6 18L9 15M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12ZM16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8C13.0609 8 14.0783 8.42143 14.8284 9.17157C15.5786 9.92172 16 10.9391 16 12Z"
            stroke="#C1C1C1"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      label: "Technician 360",
      link: "/cpp/userAnalysis",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="ep:data-analysis">
            <path
              id="Vector"
              d="M15.591 18L18.189 22.5H16.458L13.86 18H10.149L7.551 22.5H5.82L8.418 18H3.75C3.55109 18 3.36032 17.921 3.21967 17.7803C3.07902 17.6397 3 17.4489 3 17.25V4.5H1.5C1.30109 4.5 1.11032 4.42098 0.96967 4.28033C0.829018 4.13968 0.75 3.94891 0.75 3.75C0.75 3.55109 0.829018 3.36032 0.96967 3.21967C1.11032 3.07902 1.30109 3 1.5 3H22.5C22.6989 3 22.8897 3.07902 23.0303 3.21967C23.171 3.36032 23.25 3.55109 23.25 3.75C23.25 3.94891 23.171 4.13968 23.0303 4.28033C22.8897 4.42098 22.6989 4.5 22.5 4.5H21V17.25C21 17.4489 20.921 17.6397 20.7803 17.7803C20.6397 17.921 20.4489 18 20.25 18H15.591ZM19.5 4.5H4.5V16.5H19.5V4.5ZM8.25 10.5C8.44891 10.5 8.63968 10.579 8.78033 10.7197C8.92098 10.8603 9 11.0511 9 11.25V12.75C9 12.9489 8.92098 13.1397 8.78033 13.2803C8.63968 13.421 8.44891 13.5 8.25 13.5C8.05109 13.5 7.86032 13.421 7.71967 13.2803C7.57902 13.1397 7.5 12.9489 7.5 12.75V11.25C7.5 11.0511 7.57902 10.8603 7.71967 10.7197C7.86032 10.579 8.05109 10.5 8.25 10.5ZM12 9C12.1989 9 12.3897 9.07902 12.5303 9.21967C12.671 9.36032 12.75 9.55109 12.75 9.75V12.75C12.75 12.9489 12.671 13.1397 12.5303 13.2803C12.3897 13.421 12.1989 13.5 12 13.5C11.8011 13.5 11.6103 13.421 11.4697 13.2803C11.329 13.1397 11.25 12.9489 11.25 12.75V9.75C11.25 9.55109 11.329 9.36032 11.4697 9.21967C11.6103 9.07902 11.8011 9 12 9ZM15.75 7.5C15.9489 7.5 16.1397 7.57902 16.2803 7.71967C16.421 7.86032 16.5 8.05109 16.5 8.25V12.75C16.5 12.9489 16.421 13.1397 16.2803 13.2803C16.1397 13.421 15.9489 13.5 15.75 13.5C15.5511 13.5 15.3603 13.421 15.2197 13.2803C15.079 13.1397 15 12.9489 15 12.75V8.25C15 8.05109 15.079 7.86032 15.2197 7.71967C15.3603 7.57902 15.5511 7.5 15.75 7.5Z"
              fill="#C1C1C1"
            />
          </g>
        </svg>
      ),
    },
    {
      label: "Patient 360",
      link: "/cpp/Patient",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_19_4269)">
            <path
              d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 20.25C4.81594 17.1122 8.11406 15 12 15C15.8859 15 19.1841 17.1122 21 20.25"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_19_4269">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      label: "Cyber 360",
      link: "/cpp/serverDashboard",
      icon: (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <g clipPath="url(#clip0_133_1182)">
          <path
            d="M13.12 24.5H10.88C10.123 24.5 9.484 23.933 9.394 23.18L9.155 21.304C8.678 21.149 8.218 20.958 7.781 20.735L6.287 21.896C5.681 22.365 4.828 22.311 4.302 21.77L2.727 20.195C2.19 19.674 2.136 18.821 2.605 18.216L3.766 16.721C3.542 16.284 3.351 15.824 3.197 15.347L1.317 15.108C0.567 15.016 0 14.377 0 13.62V11.38C0 10.623 0.567 9.984 1.32 9.894L3.196 9.655C3.351 9.178 3.542 8.718 3.765 8.281L2.605 6.787C2.135 6.181 2.19 5.327 2.732 4.801L4.307 3.226C4.828 2.689 5.682 2.636 6.286 3.104L7.78 4.266C8.217 4.043 8.677 3.852 9.155 3.697L9.394 1.817C9.484 1.067 10.123 0.5 10.88 0.5H13.12C13.877 0.5 14.516 1.067 14.606 1.82L14.845 3.696C15.323 3.851 15.783 4.042 16.22 4.265L17.714 3.104C18.321 2.635 19.173 2.689 19.699 3.231L21.274 4.806C21.811 5.327 21.865 6.18 21.396 6.785L20.235 8.28C20.459 8.717 20.65 9.177 20.804 9.654L22.684 9.893C23.433 9.984 24 10.623 24 11.38V13.62C24 14.377 23.433 15.016 22.68 15.106L20.804 15.345C20.649 15.822 20.458 16.282 20.235 16.719L21.396 18.213C21.866 18.819 21.811 19.672 21.269 20.198L19.694 21.773C19.173 22.31 18.319 22.365 17.715 21.895L16.22 20.734C15.783 20.958 15.323 21.149 14.846 21.303L14.607 23.183C14.516 23.933 13.877 24.5 13.12 24.5ZM7.73 19.64C7.813 19.64 7.898 19.661 7.974 19.703C8.525 20.011 9.122 20.259 9.748 20.439C9.94 20.494 10.081 20.658 10.106 20.856L10.386 23.056C10.416 23.307 10.633 23.5 10.88 23.5H13.12C13.367 23.5 13.584 23.307 13.613 23.061L13.894 20.857C13.919 20.659 14.06 20.495 14.252 20.44C14.878 20.26 15.475 20.012 16.026 19.704C16.201 19.606 16.419 19.623 16.576 19.746L18.326 21.106C18.527 21.262 18.809 21.249 18.981 21.072L20.566 19.487C20.747 19.311 20.761 19.029 20.605 18.827L19.245 17.077C19.122 16.919 19.105 16.702 19.203 16.527C19.511 15.976 19.759 15.379 19.939 14.753C19.994 14.561 20.158 14.42 20.356 14.395L22.556 14.115C22.807 14.084 23 13.867 23 13.62V11.38C23 11.133 22.807 10.916 22.561 10.887L20.357 10.606C20.159 10.581 19.995 10.44 19.94 10.248C19.76 9.622 19.512 9.025 19.204 8.474C19.106 8.299 19.122 8.082 19.246 7.924L20.606 6.174C20.763 5.972 20.749 5.69 20.573 5.52L18.988 3.935C18.813 3.753 18.53 3.739 18.328 3.896L16.578 5.256C16.419 5.379 16.202 5.396 16.027 5.298C15.478 4.99 14.881 4.743 14.253 4.562C14.061 4.507 13.92 4.343 13.895 4.145L13.615 1.945C13.584 1.693 13.367 1.5 13.12 1.5H10.88C10.633 1.5 10.416 1.693 10.387 1.939L10.106 4.143C10.081 4.341 9.94 4.505 9.748 4.561C9.12 4.741 8.523 4.989 7.974 5.296C7.799 5.395 7.582 5.377 7.423 5.255L5.673 3.895C5.471 3.738 5.19 3.752 5.019 3.928L3.434 5.514C3.253 5.69 3.239 5.972 3.395 6.174L4.755 7.924C4.878 8.082 4.895 8.299 4.797 8.474C4.488 9.025 4.241 9.622 4.061 10.248C4.006 10.44 3.842 10.581 3.644 10.606L1.444 10.886C1.193 10.916 1 11.133 1 11.38V13.62C1 13.867 1.193 14.084 1.439 14.113L3.643 14.394C3.841 14.419 4.005 14.56 4.06 14.752C4.24 15.378 4.488 15.975 4.796 16.526C4.894 16.701 4.878 16.918 4.754 17.076L3.394 18.826C3.237 19.028 3.251 19.31 3.427 19.48L5.012 21.065C5.187 21.246 5.468 21.26 5.672 21.104L7.422 19.744C7.513 19.676 7.621 19.64 7.73 19.64Z"
            fill="white"
          />
          <path
            d="M12 17.5C9.243 17.5 7 15.257 7 12.5C7 9.743 9.243 7.5 12 7.5C14.757 7.5 17 9.743 17 12.5C17 15.257 14.757 17.5 12 17.5ZM12 8.5C9.794 8.5 8 10.294 8 12.5C8 14.706 9.794 16.5 12 16.5C14.206 16.5 16 14.706 16 12.5C16 10.294 14.206 8.5 12 8.5Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_133_1182">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
      ),
      submenus:[

    {
      label: "Server Threats",
      link: "/cpp/serverDashboard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <g clipPath="url(#clip0_133_1111)">
            <path
              d="M22.4659 5.87474H22.4606H20.8015V0.88735C20.8015 0.433491 20.0994 0.433491 20.0994 0.88735V5.87474H14.4756C14.2194 2.88453 11.6305 0.5 8.61733 0.5C7.9939 0.5 7.37992 0.597165 6.79253 0.788781C6.361 0.929521 6.57873 1.59671 7.01022 1.45621C7.52722 1.28757 8.06794 1.20206 8.61733 1.20206C9.24436 1.20206 9.8457 1.31416 10.4024 1.51925L8.47149 5.84568L4.61132 3.09912C4.81375 2.85228 5.0401 2.62233 5.28919 2.41312C5.63671 2.1212 5.18524 1.58361 4.83771 1.87552C3.64786 2.87484 2.8916 4.326 2.75891 5.87474H1.5392C0.70047 5.87474 0.0180664 6.5571 0.0180664 7.39588V17.8314V19.4989C0.0180664 20.3377 0.70047 21.02 1.5392 21.02H10.0303L9.65661 23.798H7.34285C6.889 23.798 6.889 24.5 7.34285 24.5H16.6569C17.1107 24.5 17.1107 23.798 16.6569 23.798H14.3431L13.9694 21.02H18.0843C18.5382 21.02 18.5382 20.318 18.0843 20.318H1.5391C1.08749 20.318 0.720034 19.9505 0.720034 19.4989V18.1824H23.2796V19.4989C23.2796 19.9505 22.9121 20.318 22.4605 20.318H20.249C19.7951 20.318 19.7951 21.02 20.249 21.02H22.4605C23.2993 21.02 23.9817 20.3377 23.9817 19.4989V17.8314V7.39588V7.39064C23.9817 6.55476 23.3017 5.87474 22.4659 5.87474ZM13.2611 21.02L13.6347 23.798H10.365L10.7386 21.02H13.2611ZM13.7938 6.51105C13.7282 9.14597 11.5977 11.3681 8.96836 11.5463V6.64832C10.5436 6.21852 12.1189 5.78872 13.6941 5.35887C13.7702 5.73756 13.8034 6.12496 13.7938 6.51105ZM11.043 1.80654C12.1873 2.41592 13.0824 3.45717 13.509 4.68166L9.23992 5.84648L11.043 1.80654ZM8.2663 6.56131V11.5463C6.12431 11.4011 4.24508 9.88754 3.64482 7.8261C3.24006 6.43602 3.44665 4.90319 4.20399 3.67093L8.2663 6.56131ZM0.720127 7.39588C0.720127 6.94426 1.08759 6.57681 1.5392 6.57681H2.74071C2.78288 7.85456 3.23458 9.03032 3.96866 9.97693L2.53837 11.227C2.46213 11.2937 2.41837 11.39 2.41837 11.4913V16.2477C2.41837 16.7016 3.12043 16.7016 3.12043 16.2477V11.6507L4.43103 10.5053C5.49812 11.5881 6.98059 12.2605 8.61733 12.2605C9.43949 12.2605 10.2226 12.0906 10.9339 11.7846V17.4803H0.720127V7.39588ZM15.7945 17.4803H13.7921V13.3492H15.7945V17.4803ZM16.4966 12.9982V10.9534H18.499V12.097V17.4804H16.4966V12.9982ZM19.2011 17.4803V12.448H21.2035V17.4803H19.2011ZM21.9055 17.4803V12.0969C21.9055 11.903 21.7484 11.7459 21.5545 11.7459H19.2011V10.6023C19.2011 10.4084 19.044 10.2513 18.8501 10.2513H16.1456C15.9517 10.2513 15.7946 10.4084 15.7946 10.6023V12.6471H13.4411C13.2472 12.6471 13.0901 12.8042 13.0901 12.9981V17.4803H11.6359V11.4247C13.2961 10.4274 14.4259 8.63427 14.4939 6.57681H20.0994V9.93458C20.0994 10.3884 20.8015 10.3884 20.8015 9.93458V6.57681H22.4606C22.9122 6.57681 23.2797 6.94426 23.2797 7.39588V17.4803H21.9055Z"
              fill="white"
            />
            <path
              d="M7.95565 13.6162H4.52936C4.0755 13.6162 4.0755 14.3183 4.52936 14.3183H7.95565C8.40956 14.3183 8.40956 13.6162 7.95565 13.6162Z"
              fill="white"
            />
            <path
              d="M7.01957 15.1401H4.52936C4.0755 15.1401 4.0755 15.8422 4.52936 15.8422H7.01957C7.47347 15.8422 7.47347 15.1401 7.01957 15.1401Z"
              fill="white"
            />
            <path
              d="M16.6568 2.58951H18.9502C19.4041 2.58951 19.4041 1.88745 18.9502 1.88745H16.6568C16.2029 1.88745 16.2029 2.58951 16.6568 2.58951Z"
              fill="white"
            />
            <path
              d="M15.6973 4.10465H18.9502C19.4041 4.10465 19.4041 3.40259 18.9502 3.40259H15.6973C15.2435 3.40259 15.2435 4.10465 15.6973 4.10465Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_133_1111">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      label: "Risk Analysis",
      link: "/cpp/riskDashboard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <g clipPath="url(#clip0_133_1182)">
            <path
              d="M13.12 24.5H10.88C10.123 24.5 9.484 23.933 9.394 23.18L9.155 21.304C8.678 21.149 8.218 20.958 7.781 20.735L6.287 21.896C5.681 22.365 4.828 22.311 4.302 21.77L2.727 20.195C2.19 19.674 2.136 18.821 2.605 18.216L3.766 16.721C3.542 16.284 3.351 15.824 3.197 15.347L1.317 15.108C0.567 15.016 0 14.377 0 13.62V11.38C0 10.623 0.567 9.984 1.32 9.894L3.196 9.655C3.351 9.178 3.542 8.718 3.765 8.281L2.605 6.787C2.135 6.181 2.19 5.327 2.732 4.801L4.307 3.226C4.828 2.689 5.682 2.636 6.286 3.104L7.78 4.266C8.217 4.043 8.677 3.852 9.155 3.697L9.394 1.817C9.484 1.067 10.123 0.5 10.88 0.5H13.12C13.877 0.5 14.516 1.067 14.606 1.82L14.845 3.696C15.323 3.851 15.783 4.042 16.22 4.265L17.714 3.104C18.321 2.635 19.173 2.689 19.699 3.231L21.274 4.806C21.811 5.327 21.865 6.18 21.396 6.785L20.235 8.28C20.459 8.717 20.65 9.177 20.804 9.654L22.684 9.893C23.433 9.984 24 10.623 24 11.38V13.62C24 14.377 23.433 15.016 22.68 15.106L20.804 15.345C20.649 15.822 20.458 16.282 20.235 16.719L21.396 18.213C21.866 18.819 21.811 19.672 21.269 20.198L19.694 21.773C19.173 22.31 18.319 22.365 17.715 21.895L16.22 20.734C15.783 20.958 15.323 21.149 14.846 21.303L14.607 23.183C14.516 23.933 13.877 24.5 13.12 24.5ZM7.73 19.64C7.813 19.64 7.898 19.661 7.974 19.703C8.525 20.011 9.122 20.259 9.748 20.439C9.94 20.494 10.081 20.658 10.106 20.856L10.386 23.056C10.416 23.307 10.633 23.5 10.88 23.5H13.12C13.367 23.5 13.584 23.307 13.613 23.061L13.894 20.857C13.919 20.659 14.06 20.495 14.252 20.44C14.878 20.26 15.475 20.012 16.026 19.704C16.201 19.606 16.419 19.623 16.576 19.746L18.326 21.106C18.527 21.262 18.809 21.249 18.981 21.072L20.566 19.487C20.747 19.311 20.761 19.029 20.605 18.827L19.245 17.077C19.122 16.919 19.105 16.702 19.203 16.527C19.511 15.976 19.759 15.379 19.939 14.753C19.994 14.561 20.158 14.42 20.356 14.395L22.556 14.115C22.807 14.084 23 13.867 23 13.62V11.38C23 11.133 22.807 10.916 22.561 10.887L20.357 10.606C20.159 10.581 19.995 10.44 19.94 10.248C19.76 9.622 19.512 9.025 19.204 8.474C19.106 8.299 19.122 8.082 19.246 7.924L20.606 6.174C20.763 5.972 20.749 5.69 20.573 5.52L18.988 3.935C18.813 3.753 18.53 3.739 18.328 3.896L16.578 5.256C16.419 5.379 16.202 5.396 16.027 5.298C15.478 4.99 14.881 4.743 14.253 4.562C14.061 4.507 13.92 4.343 13.895 4.145L13.615 1.945C13.584 1.693 13.367 1.5 13.12 1.5H10.88C10.633 1.5 10.416 1.693 10.387 1.939L10.106 4.143C10.081 4.341 9.94 4.505 9.748 4.561C9.12 4.741 8.523 4.989 7.974 5.296C7.799 5.395 7.582 5.377 7.423 5.255L5.673 3.895C5.471 3.738 5.19 3.752 5.019 3.928L3.434 5.514C3.253 5.69 3.239 5.972 3.395 6.174L4.755 7.924C4.878 8.082 4.895 8.299 4.797 8.474C4.488 9.025 4.241 9.622 4.061 10.248C4.006 10.44 3.842 10.581 3.644 10.606L1.444 10.886C1.193 10.916 1 11.133 1 11.38V13.62C1 13.867 1.193 14.084 1.439 14.113L3.643 14.394C3.841 14.419 4.005 14.56 4.06 14.752C4.24 15.378 4.488 15.975 4.796 16.526C4.894 16.701 4.878 16.918 4.754 17.076L3.394 18.826C3.237 19.028 3.251 19.31 3.427 19.48L5.012 21.065C5.187 21.246 5.468 21.26 5.672 21.104L7.422 19.744C7.513 19.676 7.621 19.64 7.73 19.64Z"
              fill="white"
            />
            <path
              d="M12 17.5C9.243 17.5 7 15.257 7 12.5C7 9.743 9.243 7.5 12 7.5C14.757 7.5 17 9.743 17 12.5C17 15.257 14.757 17.5 12 17.5ZM12 8.5C9.794 8.5 8 10.294 8 12.5C8 14.706 9.794 16.5 12 16.5C14.206 16.5 16 14.706 16 12.5C16 10.294 14.206 8.5 12 8.5Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_133_1182">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      label: "Security Analysis",
      link: "/cpp/securityAnalysis",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <g clipPath="url(#clip0_288_1043)">
          <path d="M6.10721 24.5H0.904063C0.771487 24.5 0.664062 24.3926 0.664062 24.26V10.3338C0.664062 10.2012 0.771487 10.0938 0.904063 10.0938H6.10717C6.23974 10.0938 6.34717 10.2012 6.34717 10.3338V24.26C6.34722 24.3926 6.23974 24.5 6.10721 24.5ZM1.14406 24.02H5.86717V10.5738H1.14406V24.02Z" fill="white"/>
          <path d="M4.43337 19.0938L3.50596 18.6105L2.5786 19.0938C2.4057 19.1837 2.19801 19.0319 2.23123 18.8401L2.40786 17.8191L1.65921 17.0956C1.51828 16.9594 1.59859 16.7133 1.79179 16.6854L2.82811 16.5362L3.29116 15.606C3.37761 15.4322 3.63431 15.4321 3.72081 15.606L4.18387 16.5362L5.22019 16.6854C5.41324 16.7133 5.49379 16.9593 5.35276 17.0956L4.60411 17.819L4.78075 18.84C4.80983 19.0326 4.64183 19.1826 4.43337 19.0938ZM3.61689 18.127L4.2251 18.444L4.10951 17.7757C4.09598 17.6974 4.12209 17.6174 4.17921 17.5622L4.66703 17.0908L3.99091 16.9935C3.91291 16.9822 3.84542 16.9334 3.81028 16.8628L3.50596 16.2516L3.20164 16.8628C3.16655 16.9334 3.09902 16.9822 3.02102 16.9935L2.34489 17.0908L2.83271 17.5622C2.88983 17.6174 2.91595 17.6974 2.90241 17.7757L2.78683 18.444L3.39503 18.127C3.46247 18.0867 3.56183 18.0963 3.61689 18.127Z" fill="white"/>
          <path d="M12.9275 21.7949L12.0001 21.3116L11.0727 21.7949C10.8998 21.8849 10.6921 21.733 10.7254 21.5412L10.902 20.5202L10.1533 19.7968C10.0124 19.6605 10.0927 19.4145 10.2859 19.3866L11.3222 19.2374L11.7853 18.3072C11.8717 18.1333 12.1285 18.1332 12.2149 18.3072L12.678 19.2374L13.7143 19.3866C13.9074 19.4145 13.9879 19.6605 13.8469 19.7968L13.0982 20.5202L13.2749 21.5412C13.3039 21.7337 13.1359 21.8837 12.9275 21.7949ZM12.111 20.8281L12.7192 21.1451L12.6036 20.4768C12.5901 20.3985 12.6162 20.3185 12.6733 20.2633L13.1611 19.7919L12.485 19.6946C12.407 19.6833 12.3395 19.6345 12.3044 19.564L12.0001 18.9526L11.6958 19.5639C11.6607 19.6344 11.5932 19.6832 11.5152 19.6945L10.839 19.7918L11.3269 20.2632C11.384 20.3184 11.4101 20.3984 11.3965 20.4767L11.281 21.145L11.8892 20.8281C11.9566 20.7878 12.056 20.7974 12.111 20.8281Z" fill="white"/>
          <path d="M21.4226 23.4255L20.4952 22.9422L19.5679 23.4255C19.395 23.5155 19.1873 23.3636 19.2205 23.1718L19.3971 22.1508L18.6485 21.4274C18.5075 21.2912 18.5878 21.0451 18.781 21.0172L19.8174 20.868L20.2804 19.9378C20.3669 19.7639 20.6236 19.7638 20.7101 19.9378L21.1731 20.868L22.2094 21.0172C22.4025 21.0451 22.483 21.2911 22.342 21.4274L21.5934 22.1508L21.77 23.1718C21.799 23.3643 21.631 23.5143 21.4226 23.4255ZM20.6061 22.4587L21.2143 22.7757L21.0987 22.1074C21.0852 22.0291 21.1113 21.9491 21.1684 21.8939L21.6562 21.4225L20.9801 21.3251C20.9021 21.3139 20.8346 21.2651 20.7995 21.1945L20.4952 20.5833L20.1909 21.1945C20.1558 21.2651 20.0882 21.3139 20.0102 21.3251L19.3341 21.4225L19.8219 21.8939C19.879 21.9491 19.9052 22.0291 19.8916 22.1074L19.776 22.7757L20.3842 22.4587C20.4517 22.4184 20.551 22.428 20.6061 22.4587Z" fill="white"/>
          <path d="M21.4226 19.0928L20.4952 18.6095L19.5679 19.0928C19.395 19.1827 19.1873 19.0308 19.2205 18.839L19.3971 17.818L18.6485 17.0946C18.5075 16.9584 18.5878 16.7123 18.781 16.6845L19.8174 16.5352L20.2804 15.605C20.3669 15.4312 20.6236 15.4311 20.7101 15.605L21.1731 16.5352L22.2094 16.6845C22.4025 16.7123 22.483 16.9583 22.342 17.0946L21.5934 17.818L21.77 18.839C21.799 19.0315 21.631 19.1815 21.4226 19.0928ZM20.6061 18.1259L21.2143 18.4429L21.0987 17.7746C21.0852 17.6963 21.1113 17.6163 21.1684 17.5611L21.6562 17.0897L20.9801 16.9924C20.9021 16.9811 20.8346 16.9323 20.7995 16.8618L20.4952 16.2505L20.1909 16.8618C20.1558 16.9323 20.0882 16.9811 20.0102 16.9924L19.3341 17.0897L19.8219 17.5611C19.879 17.6163 19.9052 17.6963 19.8916 17.7746L19.776 18.4429L20.3842 18.1259C20.4517 18.0857 20.551 18.0953 20.6061 18.1259Z" fill="white"/>
          <path d="M21.4226 14.7068L20.4952 14.2235L19.5679 14.7068C19.395 14.7967 19.1873 14.6449 19.2205 14.4531L19.3971 13.432L18.6485 12.7086C18.5075 12.5724 18.5878 12.3264 18.781 12.2985L19.8174 12.1492L20.2804 11.2191C20.3669 11.0452 20.6236 11.0451 20.7101 11.2191L21.1731 12.1492L22.2094 12.2985C22.4025 12.3263 22.483 12.5723 22.342 12.7086L21.5934 13.432L21.77 14.4531C21.799 14.6456 21.631 14.7956 21.4226 14.7068ZM20.6061 13.74L21.2143 14.057L21.0987 13.3887C21.0852 13.3104 21.1113 13.2304 21.1684 13.1752L21.6562 12.7038L20.9801 12.6064C20.9021 12.5952 20.8346 12.5464 20.7995 12.4758L20.4952 11.8646L20.1909 12.4758C20.1558 12.5464 20.0882 12.5952 20.0102 12.6064L19.3341 12.7038L19.8219 13.1752C19.879 13.2304 19.9052 13.3104 19.8916 13.3887L19.776 14.057L20.3842 13.74C20.4517 13.6997 20.551 13.7093 20.6061 13.74Z" fill="white"/>
          <path d="M12.9275 16.3906L12.0001 15.9073L11.0727 16.3906C10.8998 16.4806 10.6921 16.3287 10.7254 16.1369L10.902 15.1159L10.1533 14.3925C10.0124 14.2562 10.0927 14.0102 10.2859 13.9823L11.3222 13.8331L11.7853 12.9029C11.8717 12.729 12.1285 12.7289 12.2149 12.9029L12.678 13.8331L13.7143 13.9823C13.9074 14.0102 13.9879 14.2562 13.8469 14.3925L13.0982 15.1159L13.2749 16.1369C13.3039 16.3294 13.1359 16.4794 12.9275 16.3906ZM12.111 15.4238L12.7192 15.7408L12.6036 15.0725C12.5901 14.9942 12.6162 14.9142 12.6733 14.859L13.1611 14.3876L12.485 14.2903C12.407 14.279 12.3395 14.2302 12.3044 14.1597L12.0001 13.5484L11.6958 14.1596C11.6607 14.2302 11.5932 14.279 11.5152 14.2902L10.839 14.3876L11.3269 14.859C11.384 14.9142 11.4101 14.9942 11.3965 15.0725L11.281 15.7408L11.8892 15.4238C11.9566 15.3835 12.056 15.3931 12.111 15.4238Z" fill="white"/>
          <path d="M5.65087 5.09055C5.82318 5.09055 5.96287 4.95087 5.96287 4.77855C5.96287 4.60624 5.82318 4.46655 5.65087 4.46655C5.47855 4.46655 5.33887 4.60624 5.33887 4.77855C5.33887 4.95087 5.47855 5.09055 5.65087 5.09055Z" fill="white"/>
          <path d="M23.0965 24.5H17.8933C17.7607 24.5 17.6533 24.3926 17.6533 24.26V10.3338C17.6533 10.2012 17.7607 10.0938 17.8933 10.0938H23.0964C23.229 10.0938 23.3364 10.2012 23.3364 10.3338V24.26C23.3365 24.3926 23.229 24.5 23.0965 24.5ZM18.1333 24.02H22.8564V10.5738H18.1333V24.02Z" fill="white"/>
          <path d="M18.3735 5.09055C18.5458 5.09055 18.6855 4.95087 18.6855 4.77855C18.6855 4.60624 18.5458 4.46655 18.3735 4.46655C18.2012 4.46655 18.0615 4.60624 18.0615 4.77855C18.0615 4.95087 18.2012 5.09055 18.3735 5.09055Z" fill="white"/>
          <path d="M6.57922 7.83937C6.44664 7.83937 6.33922 7.73195 6.33922 7.59937V6.98339C6.33922 6.51683 6.22397 6.05435 6.00586 5.64582C5.94346 5.52889 5.98762 5.3835 6.10459 5.32105C6.22138 5.25865 6.36691 5.30276 6.42936 5.41979C6.68443 5.89758 6.81926 6.43825 6.81926 6.98339V7.59937C6.81922 7.73195 6.71179 7.83937 6.57922 7.83937Z" fill="white"/>
          <path d="M17.4216 7.83946C17.2891 7.83946 17.1816 7.73203 17.1816 7.59946V6.98347C17.1816 6.44424 17.3137 5.90875 17.5635 5.43499C17.6254 5.31768 17.7706 5.27285 17.8878 5.33463C18.005 5.39645 18.05 5.54165 17.9881 5.65887C17.7745 6.06389 17.6616 6.52191 17.6616 6.98347V7.59946C17.6616 7.73203 17.5542 7.83946 17.4216 7.83946Z" fill="white"/>
          <path d="M3.50554 0.5C2.31413 0.5 1.34481 1.47118 1.34481 2.66499C1.34481 3.21056 1.54771 3.70928 1.88131 4.09045C0.845327 4.67422 0.192383 5.77472 0.192383 6.9835V7.59949C0.192383 7.73206 0.299807 7.83949 0.432383 7.83949C0.564959 7.83949 0.672383 7.73206 0.672383 7.59949V6.9835C0.672383 5.89458 1.29139 4.90813 2.26032 4.43264C2.61259 4.68253 3.0421 4.82998 3.50558 4.82998C4.69699 4.82998 5.66635 3.8588 5.66635 2.66499C5.6663 1.47118 4.69699 0.5 3.50554 0.5ZM3.50554 4.34998C2.57875 4.34998 1.82477 3.59413 1.82477 2.66499C1.82477 1.73586 2.5788 0.98 3.50554 0.98C4.43227 0.98 5.1863 1.7359 5.1863 2.66499C5.1863 3.59408 4.43232 4.34998 3.50554 4.34998Z" fill="white"/>
          <path d="M22.1194 4.08997C22.4528 3.7089 22.6555 3.21037 22.6555 2.66499C22.6555 1.47118 21.6862 0.5 20.4948 0.5C19.3033 0.5 18.334 1.47118 18.334 2.66499C18.334 3.85875 19.3033 4.82998 20.4948 4.82998C20.9582 4.82998 21.3877 4.68253 21.74 4.43264C22.7089 4.90813 23.3279 5.89458 23.3279 6.9835V7.59949C23.3279 7.73206 23.4353 7.83949 23.5679 7.83949C23.7005 7.83949 23.8079 7.73206 23.8079 7.59949V6.9835C23.8079 5.77477 23.1553 4.67379 22.1194 4.08997ZM18.814 2.66499C18.814 1.7359 19.568 0.98 20.4948 0.98C21.4215 0.98 22.1755 1.7359 22.1755 2.66499C22.1755 3.59408 21.4215 4.34998 20.4948 4.34998C19.568 4.34998 18.814 3.59413 18.814 2.66499Z" fill="white"/>
          <path d="M13.6245 4.08997C13.9582 3.7089 14.1615 3.21061 14.1615 2.66499C14.1615 1.47118 13.1921 0.5 12.0007 0.5C10.8093 0.5 9.83993 1.47118 9.83993 2.66499C9.83993 3.21046 10.0427 3.70909 10.3762 4.09016C9.34025 4.67394 8.6875 5.77472 8.6875 6.9835V7.59949C8.6875 7.73206 8.79492 7.83949 8.9275 7.83949C9.06008 7.83949 9.1675 7.73206 9.1675 7.59949V6.9835C9.1675 5.89515 9.78569 4.90875 10.7538 4.43298C11.4928 4.95618 12.5085 4.95618 13.2476 4.43298C14.2157 4.90875 14.8339 5.89515 14.8339 6.9835V7.59949C14.8339 7.73206 14.9413 7.83949 15.0739 7.83949C15.2064 7.83949 15.3139 7.73206 15.3139 7.59949V6.9835C15.3139 5.77453 14.6608 4.6737 13.6245 4.08997ZM12.0007 0.98C12.9275 0.98 13.6815 1.7359 13.6815 2.66499C13.6815 3.59408 12.9275 4.34998 12.0007 4.34998C11.0739 4.34998 10.3199 3.59413 10.3199 2.66499C10.3199 1.73586 11.0739 0.98 12.0007 0.98Z" fill="white"/>
          <path d="M14.6023 24.5H9.39918C9.2666 24.5 9.15918 24.3926 9.15918 24.26V10.3338C9.15918 10.2012 9.2666 10.0938 9.39918 10.0938H14.6023C14.7349 10.0938 14.8423 10.2012 14.8423 10.3338V24.26C14.8423 24.3926 14.7349 24.5 14.6023 24.5ZM9.63918 24.02H14.3623V10.5738H9.63918V24.02Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_288_1043">
            <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
          </clipPath>
        </defs>
      </svg>
      ),
    },
    {
      label: "Gen-AI",
      link: "/cpp/Gen-AI",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <g clipPath="url(#clip0_133_1096)">
            <path
              d="M21.8906 10.4375C23.0537 10.4375 24 9.49123 24 8.32812V2.65625C24 1.49056 23.058 0.5 21.8906 0.5H11.9531C10.7872 0.5 9.84375 1.48892 9.84375 2.65625V7.7457C9.19589 7.97544 8.6925 8.51319 8.51081 9.18209C8.13211 8.77845 7.68605 8.4388 7.19109 8.18052C7.99195 7.48752 8.4375 6.50755 8.4375 5.46875C8.4375 3.53023 6.86039 1.95312 4.92188 1.95312C2.98336 1.95312 1.40625 3.53023 1.40625 5.46875C1.40625 6.5053 1.85006 7.48597 2.65252 8.18042C1.0777 9.00219 0 10.651 0 12.5469C0 12.8559 0 19.2691 0 19.5781C0 19.9664 0.314812 20.2812 0.703125 20.2812H9.51469C8.84531 21.0282 8.4375 22.0142 8.4375 23.0938V23.7969C8.4375 24.1852 8.75231 24.5 9.14062 24.5C9.76195 24.5 22.6755 24.5 23.2969 24.5C23.6852 24.5 24 24.1852 24 23.7969V23.0938C24 21.5053 23.1073 20.1301 21.7968 19.406C22.3109 18.8786 22.5938 18.1941 22.5938 17.4688C22.5938 15.9038 21.2793 14.6562 19.7344 14.6562C18.1836 14.6562 16.9219 15.9179 16.9219 17.4688C16.9219 18.2171 17.2162 18.8976 17.6946 19.402C17.0973 19.7334 16.5885 20.2054 16.2131 20.7731C15.8283 20.202 15.3095 19.7286 14.7015 19.3963C15.1766 18.8925 15.4688 18.2143 15.4688 17.4688C15.4688 15.9179 14.2071 14.6562 12.6562 14.6562V10.4375H21.8906ZM19.7344 16.0625C20.5221 16.0625 21.1875 16.7065 21.1875 17.4688C21.1875 18.231 20.5221 18.875 19.7344 18.875C18.959 18.875 18.3281 18.2442 18.3281 17.4688C18.3281 16.6933 18.959 16.0625 19.7344 16.0625ZM19.7344 20.2812C21.3111 20.2812 22.5938 21.5429 22.5938 23.0938H16.9219C16.9219 21.5429 18.1836 20.2812 19.7344 20.2812ZM4.92188 3.35938C6.08498 3.35938 7.03125 4.30564 7.03125 5.46875C7.03125 6.63758 6.0653 7.625 4.92188 7.625C3.77845 7.625 2.8125 6.63758 2.8125 5.46875C2.8125 4.30564 3.75877 3.35938 4.92188 3.35938ZM1.40625 12.5469C1.40625 10.6084 2.98336 9.03125 4.92188 9.03125C6.86039 9.03125 8.4375 10.6084 8.4375 12.5469V13.9531C8.4375 14.3414 8.75231 14.6562 9.14062 14.6562C9.52894 14.6562 9.84375 14.3414 9.84375 13.9531C9.84375 13.423 9.84375 10.1677 9.84375 9.73438C9.84375 9.34667 10.1592 9.03125 10.5469 9.03125C10.9346 9.03125 11.25 9.34667 11.25 9.73438V15.0346C10.8242 15.2816 10.4691 15.6367 10.2221 16.0625H8.31656C8.39461 15.8424 8.4375 15.6058 8.4375 15.3594C8.4375 14.1963 7.49123 13.25 6.32812 13.25H4.21875V12.5469C4.21875 12.1586 3.90394 11.8438 3.51562 11.8438C3.12731 11.8438 2.8125 12.1586 2.8125 12.5469V13.9531C2.8125 14.3414 3.12731 14.6562 3.51562 14.6562H6.32812C6.71583 14.6562 7.03125 14.9717 7.03125 15.3594C7.03125 15.7471 6.71583 16.0625 6.32812 16.0625H2.10938C1.72167 16.0625 1.40625 15.7471 1.40625 15.3594V12.5469ZM1.40625 18.875V17.4688C1.76292 17.4688 9.31172 17.4688 9.84375 17.4688C9.84375 17.9809 9.98199 18.461 10.2221 18.875H1.40625ZM15.5156 23.0938H9.84375C9.84375 21.5429 11.1054 20.2812 12.6562 20.2812C14.2329 20.2812 15.5156 21.5429 15.5156 23.0938ZM14.0625 17.4688C14.0625 18.2442 13.4317 18.875 12.6562 18.875C11.8808 18.875 11.25 18.2442 11.25 17.4688C11.25 16.6933 11.8808 16.0625 12.6562 16.0625C13.4317 16.0625 14.0625 16.6933 14.0625 17.4688ZM12.5353 9.03125C12.3231 8.43294 11.8483 7.95814 11.25 7.74594V2.65625C11.25 2.25673 11.5786 1.90625 11.9531 1.90625H21.8906C22.2652 1.90625 22.5938 2.25673 22.5938 2.65625V8.32812C22.5938 8.71583 22.2783 9.03125 21.8906 9.03125H12.5353Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_133_1096">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ]
  },
];

function ProductSidebar() {
  const [collapsed, setCollapsed] = React.useState(true);
  const [activeItem, setActiveItem] = React.useState(0);
  const [activeSubItem, setActiveSubItem] = React.useState(-1);

  const location = useLocation();

  useEffect(() => {
    const currentLink = location.pathname;
    const foundIndex = navItems.findIndex((item) => item.link === currentLink);
    if (foundIndex !== -1) {
      setActiveItem(foundIndex);
      setActiveSubItem(-1);
    } else {
      const foundSubmenuIndex = navItems.findIndex(
        (item) =>
          item.submenus &&
          item.submenus.findIndex((submenu) => submenu.link === currentLink) !==
            -1
      );

      if (foundSubmenuIndex !== -1) {
        setActiveItem(foundSubmenuIndex);
        const submenu = navItems[foundSubmenuIndex].submenus?.find(
          (submenu) => submenu.link === currentLink
        );
        setActiveSubItem(submenu ? 0: -1); //setActiveSubItem(submenu ? submenu.index : -1);
      } else {
        setActiveItem(-1);
        setActiveSubItem(-1);
      }
    }
  }, [location]);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="Productsidebar-antd"
      style={{
        background: "#204496",
        position: "fixed",
        zIndex: 100,
      }}
    >
      <div className="text-center mt-3">
        <img
          src="/assets/img/align_left.png"
          className="logo"
          alt=""
          onClick={() => setCollapsed(!collapsed)}
          style={{
            height: 24,
            objectFit: "contain",
            width: "100%",
          }}
        />
      </div>
      <div className="d-flex flex-column">
        <ul className="nav-ul">
          {navItems.map((item, index) => (
            <Link to={item.link} key={index}>
              <li
                key={index}
                className={
                  activeItem === index ? `nav-ul-item active` : `nav-ul-item`
                }
                onClick={() => setActiveItem(index)}
              >
                <div className="d-flex" style={{ height: "25px" }}>
                  <span className="px-4">{item.icon}</span>
                  {!collapsed ? (
                    <span className="text-white ">{item.label}</span>
                  ) : null}
                </div>
                {item.submenus && !collapsed && activeItem === index ? (
                  <ul className="submenu-ul">
                    {item.submenus.map((submenu, subIndex) => (
                      <Link to={submenu.link} key={subIndex}>
                        <li
                          key={subIndex}
                          className={
                            activeSubItem === subIndex
                              ? `submenu-ul-item active`
                              : `submenu-ul-item`
                          }
                          style={{ listStyleType: "none", marginTop: "20px" }}
                          onClick={() => setActiveSubItem(subIndex)}
                        >
                          <div className="d-flex" style={{ height: "25px" }}>
                            <span className="px-4">{submenu.icon}</span>
                            {!collapsed ? (
                              <span className="text-white">
                                {submenu.label}
                              </span>
                            ) : null}
                          </div>
                        </li>
                      </Link>
                    ))}
                  </ul>
                ) : null}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </Sider>
  );
}

export default ProductSidebar;