import { jsPDF } from 'jspdf';
import { PERSONAL_INFO } from '../data/portfolioData';

export function downloadResumePDF(): void {
  const doc = new jsPDF({ unit: 'pt', format: 'letter' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 45;
  const contentWidth = pageWidth - margin * 2;
  let y = 48;

  function checkPageBreak(needed: number) {
    if (y + needed > pageHeight - 45) {
      doc.addPage();
      y = 48;
    }
  }

  function addSectionHeader(title: string) {
    checkPageBreak(32);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(30, 41, 59); // Slate-800
    doc.text(title.toUpperCase(), margin, y);
    y += 5;
    doc.setDrawColor(99, 102, 241); // Indigo-500
    doc.setLineWidth(1.2);
    doc.line(margin, y, pageWidth - margin, y);
    y += 14;
  }

  // --- HEADER ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(15, 23, 42);
  doc.text('NEHA SAIN', pageWidth / 2, y, { align: 'center' });
  y += 18;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(79, 70, 229); // Indigo-600
  doc.text('PYTHON FULLSTACK DEVELOPER', pageWidth / 2, y, { align: 'center' });
  y += 14;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  const contact = `${PERSONAL_INFO.location}   •   ${PERSONAL_INFO.phone}   •   ${PERSONAL_INFO.email}`;
  doc.text(contact, pageWidth / 2, y, { align: 'center' });
  y += 12;

  const links = `LinkedIn: ${PERSONAL_INFO.linkedin}   •   GitHub: ${PERSONAL_INFO.github}`;
  doc.setTextColor(14, 116, 144); // Cyan-700
  doc.text(links, pageWidth / 2, y, { align: 'center' });
  y += 18;

  // --- PROFESSIONAL SUMMARY ---
  addSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  const summaryText =
    'Results-driven Python FullStack Developer with 2+ years of enterprise experience and a track record of delivering end-to-end web applications for 10+ freelance clients as well as mission-critical data infrastructure deployed at Nokia Networks in Gurgaon, India. Experienced in architecting automated ETL pipelines (Pandas, NumPy), RESTful Flask/Node APIs, responsive frontend systems (React, JavaScript), relational schemas (PostgreSQL, MySQL), and NoSQL storage (MongoDB). Proven ability to replace manual Excel workflows with automated Power BI dashboards and robust RBAC cloud systems.';
  const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(splitSummary, margin, y);
  y += splitSummary.length * 12 + 10;

  // --- TECHNICAL SKILLS ---
  addSectionHeader('Technical Skills');
  const skillsData = [
    { cat: 'Languages & Core:', items: 'Python (Flask, Pandas, NumPy), JavaScript (ES6+), TypeScript, HTML5, CSS3' },
    { cat: 'Frontend & UI:', items: 'React.js, Tailwind CSS, Responsive Web Design, Component Architecture' },
    { cat: 'Databases & Data:', items: 'PostgreSQL, MySQL, MongoDB, Relational Schema Design, ETL Pipelines, Query Optimization' },
    { cat: 'Tools & DevOps:', items: 'AWS, Git, GitHub, Linux, Gunicorn, RESTful APIs, JWT Auth, Postman, Vercel' },
    { cat: 'BI & Automation:', items: 'Power BI, Power Automate, Executive KPI Dashboards, Automated Email Alerting' },
  ];

  doc.setFontSize(8.5);
  skillsData.forEach((skill) => {
    checkPageBreak(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 41, 59);
    doc.text(skill.cat, margin, y);
    const labelWidth = doc.getTextWidth(skill.cat);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(skill.items, margin + labelWidth + 5, y);
    y += 13;
  });
  y += 6;

  // --- WORK EXPERIENCE ---
  addSectionHeader('Professional Experience');

  // Nokia Role
  checkPageBreak(75);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text('Python Developer (Full Stack)', margin, y);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(79, 70, 229);
  doc.text('Aug 2024 – Present', pageWidth - margin, y, { align: 'right' });
  y += 13;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(14, 116, 144);
  doc.text('Teleindia Telecom Services  |  Deployed at Client Account: Nokia Networks', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text('Gurgaon, India', pageWidth - margin, y, { align: 'right' });
  y += 14;

  const expBullets = [
    'Architected and deployed end-to-end automated ETL pipelines using Python (Pandas, NumPy) and PostgreSQL, replacing manual spreadsheet collation and reducing turnaround time by 80%.',
    'Engineered a comprehensive PMO KPI web application with Python Flask and PostgreSQL, providing multi-project cost monitoring, audit trails, and automated email alert mechanisms.',
    'Designed interactive drill-down Power BI scorecards and Power Automate notification workflows, delivering executive cost transparency reviewed during monthly leadership reviews.',
    'Served as primary technical point of contact across international cross-functional teams including Sri Lanka and Bangladesh.',
    'Enforced strict multi-tenant Role-Based Access Control (RBAC), data isolation policies, and managed release workflows via Git and GitHub.'
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  expBullets.forEach((bullet) => {
    const bulletLines = doc.splitTextToSize(`•  ${bullet}`, contentWidth - 8);
    checkPageBreak(bulletLines.length * 11 + 4);
    doc.text(bulletLines, margin + 4, y);
    y += bulletLines.length * 11 + 3;
  });
  y += 8;

  // --- KEY PROJECTS & CLIENT DELIVERIES ---
  addSectionHeader('Key Projects & Client Deliveries');

  // Finance Cost Tracking
  checkPageBreak(48);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Finance Cost Tracking & Project Health Analysis Application', margin, y);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(79, 70, 229);
  doc.text('Sep 2025 – Present', pageWidth - margin, y, { align: 'right' });
  y += 12;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text('Tech: React, Node.js, Express, PostgreSQL, Power BI, Tailwind CSS, RBAC', margin, y);
  y += 12;

  const finBullets = [
    'Built full-stack financial monitoring app with 3-tier RBAC (Admins, PMO, Project Leads) eliminating manual Excel reconciliation.',
    'Integrated automated sync pipeline feeding cost deviations directly into Power BI executive dashboards.'
  ];
  finBullets.forEach((bullet) => {
    const bulletLines = doc.splitTextToSize(`•  ${bullet}`, contentWidth - 8);
    checkPageBreak(bulletLines.length * 11 + 3);
    doc.text(bulletLines, margin + 4, y);
    y += bulletLines.length * 11 + 2;
  });
  y += 6;

  // Inventory Deployment Tracking
  checkPageBreak(45);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Inventory Deployment Tracking Application', margin, y);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(79, 70, 229);
  doc.text('Mar 2025 – Jul 2025', pageWidth - margin, y, { align: 'right' });
  y += 12;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text('Tech: Python, Flask, MySQL, MongoDB, Docker, RESTful APIs', margin, y);
  y += 12;

  const invBullets = [
    'Hybrid persistence tracking telecom equipment rollouts: MySQL for relational state and MongoDB for device payload history.',
    'Built automated tracking dashboards ensuring hardware deployment traceability across multi-site teams.'
  ];
  invBullets.forEach((bullet) => {
    const bulletLines = doc.splitTextToSize(`•  ${bullet}`, contentWidth - 8);
    checkPageBreak(bulletLines.length * 11 + 3);
    doc.text(bulletLines, margin + 4, y);
    y += bulletLines.length * 11 + 2;
  });
  y += 8;

  // --- EDUCATION ---
  addSectionHeader('Education');
  checkPageBreak(30);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Bachelor of Technology (B.Tech) in Computer Science', margin, y);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(79, 70, 229);
  doc.text('Jul 2020 – Jun 2024', pageWidth - margin, y, { align: 'right' });
  y += 12;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text('Laxmi Devi Institute of Engineering and Technology (LIET), Alwar, Rajasthan  •  Cumulative GPA: 7.5 / 10', margin, y);
  y += 11;
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(79, 70, 229);
  doc.text('• Part member and coordinator of "Blind Coding" in all technical tasks in college', margin + 4, y);
  y += 15;

  // Page numbering footer on all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184); // Slate-400
    doc.text(
      `Neha Sain — Curriculum Vitae  |  Page ${i} of ${totalPages}`,
      pageWidth / 2,
      pageHeight - 20,
      { align: 'center' }
    );
  }

  // Trigger download
  doc.save('Neha_Sain_Resume.pdf');
}
