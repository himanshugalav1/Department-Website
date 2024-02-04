import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import strip from "../../assets/img/heading_main_border.png"

export default function achievements() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "50px" }}>
          <h1 style={{ textAlign: "center" }}>Achievements</h1>
          <img src={strip} style={{ alignContent: "center", width: "350px", height: "6px" }}></img>
        </Row>


        <Row className="arearow" style={{backgroundColor:'rgba(1, 1, 50, 0.6)', borderRadius:'8px'}}>
          <Col style={{ justifyContent: 'center', padding:'20px 30px 20px 30px' }}>
            <ul>
              <li>Congratulations to Dr. Yashasvi Bansal, Research Scholar, EED and Supervisor: Dr. Ranjana Sodhi on secutring a possition as Assistant Professor at IIT Delhi.</li>
              <li>Congratulations to Dr. Prashant Wagamabr Patil, Research Scholar, EED and Supervisor: Dr. Subrahmanyam Murala on secutring a possition as Assistant Professor at IIT Guwahati.</li>
              <li>Mr. Ashutosh Kulkarni, Research Scholar, EED (Supervisor: Dr. Subrahmanyam Murala and Dr. Santosh Kumar Vipparthi) selected for TCS Research Scholar Program.</li>
              <li>Mr. Sameer kumar Singh, Research Scholar, EED (Supervisor: Dr. Brijesh Kumbhani) selected for PMRF scheme.</li>
              <li>Mr. Sathyamoorthy D, Research Scholar, EED (Supervisor: Prof. C. C. Reddy) Won POSOCO Power system Award 2022, 2nd prize award in JICABLE HVDC'21 and INAE-(Indian National Academy of Engineering) 100s award.</li>
              <li>Dr. Alampratap Singh Tiwana, Post-Doc, EED (Supervisor: Prof. C. C. Reddy) Won first prize in Siemens Energy Clean Energy competition 2021 organized globally!</li>
              <li>Dr. Birender Singh, Research Scholar, EED (Supervisor: Prof. C. C. Reddy) Won POSOCO Power system Award 2022.</li>
              <li>Mr. G Nithin Reddy, M.Tech. Student, EED (Supervisor: Prof. C. C. Reddy) Won Sunny Oberoi 2021 for M.tech best thesis award and Won POSOCO Power system Award 2021 for M.Tech best Thesis.</li>
              <li>Mr. Azmeera Harshit Kumar, Research Scholar, EED (Supervisor: Prof. C. C. Reddy) Won Sunny Oberoi 2021 for M.tech best thesis award.</li>
              <li>Mr. Enukonda Venkateshwar Reddy, M.Tech. Student, EED (Supervisor: Prof. C. C. Reddy) Won POSOCO Power system Award 2021 for M.Tech best Thesis.</li>
              <li>Mr. Arshdeep Singh Sandhu, M.Tech. Student, EED (Supervisor: Prof. C. C. Reddy) Won POSOCO Power system Award 2021 for M.Tech best Thesis.</li>
              <li>Mr. Arittra Das, Research Scholar, EED (Supervisor: Prof. C. C. Reddy) selected for PMRF scheme.</li>
              <li>IEEE IES-SYPA to Ashwani Kumar Rana (Supervisor: Dr. Raviteja) for the presented work on "Four quadrant operation of SRM drive based on Modulated Torque Sharing Function" in IECON 2021.</li>
              <li>IEEE IES-SYPA to Muddasani Satyanarayana (Supervisor: Dr. Raviteja) for the presented work on "CORDIC based Orthogonal Signal Generation with In-loop Moving Average Filter for Single Phase PLL Systems" in IECON 2021.</li>
              <li>CII-MILCA 2022 Platinum award to Ashwani K Rana (Supervisor: Dr. Raviteja) for his presentation of his research work under the theme "Low Cost Smart Transportation".</li>
              <li>Mr. Vivek K Srivastava, Research Scholar, EED (Supervisor: Dr. Ashwani Sharma) selected for PMRF scheme.</li>
              <li>Mr. Ajit John Thomas, Research Scholar, EED (Supervisor: Dr. C C Reddy) won the IEEE DEIS Graduate fellowship.</li>
              <li>Mr. Nitin G, M. Tech Student, EED (Supervisor: Dr. C C Reddy) received the POSOSO Award-2021.</li>
              <li>Mr. Kapil Chauhan and Ms. Yashasvi Bansal, Research Scholar, EED (Supervisor: Dr. Ranjana Sodhi) received the Powergrid POSOSO Award-2021.</li>
              <li>Dr. Rohit Sharma inaugrated Indo-Taiwan joint research centre on AI and ML, as the project coordinator.</li>
              <li>Mr. Pranav Johri, Research Scholar, EED (Supervisor: Prof. C. C. Reddy) Received a grant in the Jicable'19 Conference, held in Versailles, France.</li>
              <li>Ms. Yashasvi Bansal, Research Scholar, EED (Supervisor: Ranjana Sodhi) received best paper for the session on Power System Measurement in ICPS 2019 Conference.</li>
              <li>Asrhdeep Sandhu and Dr. C C Reddy were awarded with the best paper award for "Experimental Investigations on Remote Measurements of HV Electrode Current" at IEEE ICIIS 2018.</li>
              <li>Mr. Shithikantha Dash (Ranjana Sodhi and Balwinder Sodhi) received best paper for the session on Demand Side management in ICPS 2019 Conference.</li>
              <li>Dr. Ravibabu Mulaveesala (Associate Professor, Department of Electrical Engineering), along with Dr. Vanita arora, Dr. Geetika Dua and research scholar Anshul Sharma innovated a "Thermal Wave Imaging Equipment" to detect Breast Cancer.</li>
            </ul>
          </Col>
        </Row>

      </Container >
    </Container >
  );
}
