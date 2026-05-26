import outpatientIcon from '../assets/outpatient-icon.svg'
import outpatientImage from '../assets/outpatient.jpg'
import inpatientIcon from '../assets/inpatient-icon.svg'
import inpatientImage from '../assets/inpatient.jpg'
import surgeryIcon from '../assets/surgery-icon.svg'
import surgeryImage from '../assets/surgery.jpg'
import maternityIcon from '../assets/maternity-icon.svg'
import maternityImage from '../assets/maternity.jpg'
import femiPlanIcon from '../assets/femiPlan-icon.svg'
import femiPlanImage from '../assets/femiPlan.jpg'
import labIcon from '../assets/laboratory-icon.svg'
import labImage from '../assets/laboratory.jpg'
import chronicCareIcon from '../assets/chronic-care-icon.svg'
import chronicCareImage from '../assets/chronic-care.jpg'
import wellnessIcon from '../assets/wellness-icon.svg'
import wellnessImage from '../assets/wellness.jpg'
import dentalIcon from '../assets/dental-icon.svg'
import dentalImage from '../assets/dental.jpeg'
import rehabImage from '../assets/rehab.jpg'
import athritisIcon from '../assets/athritis-icon.svg'
import athritisImage from '../assets/athritis.jpg'
import homeCareIcon from '../assets/home-care.svg'
import certificateIcon from '../assets/certificate-icon.svg'
import certificateImage from '../assets/certificate.jpg'
import immunizationIcon from '../assets/immunization-icon.svg'
import immunizationImage from '../assets/immunization.jpg'
import screeningImage from '../assets/screening.jpg'
import emergencyIcon from '../assets/emergency-icon.svg'
import emergencyImage from '../assets/emergency.jpg'
import specialistIcon from '../assets/specialist-icon.svg'
import voiceImage from '../assets/voice.jpg'
import voiceIcon from '../assets/voice-icon.svg'
import medicineImage from '../assets/medicine.jpg'
import medicineIcon from '../assets/medicine-icon.svg'
import weightlossImage from '../assets/weightloss.jpg'
import weightlossIcon from '../assets/weightloss-icon.svg'
import physioIcon from '../assets/physio-icon.svg'
import hourglassIcon from '../assets/hour-glass.svg'
import medsImage from '../assets/meds.jpg'

const services = [
  {
    slug: 'outpatient',
    title: "Outpatient Services",
    short: 'General consultations, diagnosis, follow-ups and everyday medical care.',
    icon: outpatientIcon,
    image: outpatientImage,
    features: [
      'General consultations',
      'Diagnosis',
      'Follow-up appointments',
      'Everyday medical care',
      'Prescription & Pharmacy Services',
      'Appointments',
    ],
    detail: `Our outpatient department is designed to deliver seamless, comprehensive medical care without the need for an overnight stay. From prompt general consultations and expert diagnostic evaluations to routine follow-ups and preventative everyday medical care, our dedicated team ensures your health is managed efficiently. We combine cutting-edge technology with personalized treatment plans to get you accurate answers and effective solutions, helping you return to your daily routine as quickly and safely as possible.`,
  },
  {
    slug: 'inpatient',
    title: "Inpatient Services",
    short: '24-hour patient care, admission and recovery support.',
    icon: inpatientIcon,
    image: inpatientImage,
    features: [
      '24-hour patient care',
      'Admission services',
      'Recovery support',
      'Streamlined Admission & Patient Triage',
      'Everyday Medical Care & Management',
      'Chronic Condition Management ',
    ],
    detail: `When medical conditions require dedicated, round-the-clock hospital stays, our inpatient department provides a safe, nurturing environment for complete healing. We offer continuous 24-hour patient care led by experienced physicians and a compassionate nursing team. From the moment of admission through every stage of your treatment and recovery support, we combine modern medical technology with personalized attention. Our priority is ensuring maximum patient comfort, safety, and professional clinical monitoring to guide you or your loved ones smoothly back to full health.`,
  },
  {
    slug: 'surgery',
    title: "Surgical Services",
    short: 'Major and minor surgical procedures performed by qualified professionals.',
    icon: surgeryIcon,
    image: surgeryImage,
    features: [
      'Major Specialized surgeries',
      'Minor surgeries',
      'Pre-operative consultations',
      'Post-operative care',
      'Thorough Pre-Operative Consultations & Treatment Mapping',
      'Attentive Post-Operative Care & Monitoring',
      'Advanced Anesthesia & Pain Management',
      'Wound Care & Sterile Dressing Management',
      'Post-Surgical Rehabilitation & Recovery Planning ',
    ],
    detail: `Our advanced theater is fully equipped to handle both major and minor surgical procedures, delivered with precision by highly qualified surgeons and professional clinical teams. We recognize that undergoing surgery is a significant milestone, which is why we provide a seamless, end-to-end medical journey. From thorough pre-operative consultations that map out your treatment path to compassionate, round-the-clock post-operative care, we prioritize safety, modern techniques, and patient comfort at every stage to ensure a smooth, successful recovery process.`,
  },
  {
    slug: 'maternity',
    title: "Maternity & Women's Health",
    short: 'Comprehensive maternal care for mothers and babies from pregnancy to recovery.',
    icon: maternityIcon,
    image: maternityImage,
    features: [
      'Comprehensive ANC Clinic & Continuous Follow-Ups',
      'Cesarean Services & Safe Delivery',
      'Specialized High-risk pregnancy care',
      'Dedicated Prenatal and postnatal care',
      "Holistic Women's wellness consultations",
      'Safe & Modern Delivery Suites',
      '24/7 Emergency Obstetric Response',
      'Newborn Immunization & Pediatric Monitoring',
    ],
    detail: `Our maternity department offers comprehensive, compassionate maternal care designed to safeguard both mothers and babies from early pregnancy through to full postpartum recovery. We understand that bringing new life into the world is a profound journey, which is why our specialized team of obstetricians, midwives, and nurses provides round-the-clock support. Combining modern clinical solutions with warm, personalized attention, we ensure a safe, comfortable environment for delivery, expert risk monitoring, and dedicated guidance for your newborn's healthy start.`,
  },
  {
    slug: 'family-planning',
    title: "Family Planning & Reproductive Health",
    short: 'Comprehensive family planning and reproductive health services.',
    icon: femiPlanIcon,
    image: femiPlanImage,
    features: [
      'Contraception Counseling & Options',
      'Preconception Care & Health Optimization',
      'Fertility Assessment & Treatment',
      'Prenatal Care & Education',
      'Postpartum Family Planning Support',
      'Sexual Health Education & Counseling',
      'Emergency Contraception Services',
    ],
    extra: "Coil (IUD), Jadelle, Depo-Provera (Depo), Bilateral Tubal Ligation (BTL)",
    detail: `Our family planning department provides comprehensive, confidential services to help you make informed decisions about your reproductive health and family planning needs. From contraception counseling and fertility assessment to preconception care and postpartum support, our team of specialists is dedicated to providing personalized, compassionate care. We understand that every individual's journey is unique, which is why we offer a wide range of services tailored to your specific needs and circumstances.`,
  },
  {
    slug: 'laboratory',
    title: 'Class E Laboratory Services',
    short: 'Reliable and accurate laboratory testing for diagnosis and preventive healthcare.',
    icon: labIcon,
    image: labImage,
    features: [
      'Comprehensive Blood Work & Hematology',
      'Advanced Urine Analysis & Renal Checks',
      'Specialized Cancer Markers & Screenings',
      'Confidential HIV Screening & Counseling',
      'Targeted STI & UTI Screenings',
      'Rapid Pregnancy & Maternal Testing',
      'Advanced Diagnostic Testing & Cultures',
    ],
    extra: 'Our laboratory is fully licensed as a Class E facility, ensuring the highest standards of quality, reliability, and confidentiality in all testing services.',
    detail: `Our state-of-the-art laboratory provides highly reliable, confidential, and accurate testing essential for precise medical diagnosis and proactive preventative healthcare. Equipped with modern diagnostic equipment and managed by qualified laboratory scientists, we ensure rapid turnaround times for all test results. Whether you need routine blood screenings, specialized health markers, or urgent diagnostic evaluations, our laboratory delivers the critical data your doctors need to make informed, life-saving treatment decisions for you and your family.`,
  },
  {
    slug: 'chronic-care',
    title: 'Chronic Illness Management',
    short: 'Support and long-term follow-up care for chronic conditions.',
    icon: chronicCareIcon,
    image: chronicCareImage,
    features: [
      'Personalized Diabetes Management & Care',
      'Proactive Hypertension & Blood Pressure Management',
      'Dedicated Monthly Specialized Clinics',
      'Hassle-Free Drug Refills & Pharmacy Coordination',
      'Continuous Long-Term Follow-Up Care ',
      'Guidance on lifestyle adjustments, self-monitoring techniques, and nutrition to confidently manage your condition at home.',
    ],
    detail: `Living with a chronic health condition requires a dedicated healthcare partner you can rely on every single day. If you or a loved one have been diagnosed with a long-term condition, our specialized clinics offer the regular monitoring, expert medical supervision, and continuous follow-up care essential to protect your health. We focus on proactive management, lifestyle guidance, and seamless medication access to prevent complications, minimize symptoms, and significantly improve your daily quality of life.`,
  },
  {
    slug: 'wellness',
    title: 'General Health & Wellness Testing',
    short: 'Preventive screenings and full body checkups.',
    icon: wellnessIcon,
    image: wellnessImage,
    features: [
      'Insurance medical testing',
      'Full body checkups',
      'Preventive screenings',
      'Wellness consultations',
    ],
    extra: 'Ksh 10,000 insurance package fully covered under your yearly insurance plan.',
    detail: `Take control of your health before illness strikes with our Annual Wellness Packages. Fully covered under your yearly insurance plan, this package includes comprehensive preventative health screenings, vital lab tests, and expert doctor consultations. It is designed to catch health risks early, giving you and your family total peace of mind every single year.`,
  },
  {
    slug: 'dental',
    title: 'Dental Care',
    short: 'Professional dental care focused on healthy smiles and pain relief.',
    icon: dentalIcon,
    image: dentalImage,
    features: [
      'Emergency Tooth Extraction – Ksh 500',
      'Professional Dental Consultation – Ksh 200',
      'Advanced Root Canal Therapy – Ksh 5000',
      'Premium Dental Filling – Ksh 2500',
      'Custom Dentures & Prosthetics – Price varies',
      'Cosmetic Teeth Whitening – Ksh 1000 per tooth',
      'Orthodontic Braces & Realignment – Price varies',
      'Thorough Dental Scaling & Polishing – Ksh 3000',
    ],
    detail: `A healthy smile is a vital part of your overall well-being. Our dedicated dental clinic offers a full range of professional dental care focused on immediate pain relief, preventative oral hygiene, and beautiful cosmetic transformations. Managed by skilled dental specialists using modern equipment, we provide affordable, transparently priced treatments in a comfortable and stress-free environment. From routine cleanings to advanced restorative procedures, we are committed to helping you and your family maintain bright, healthy, and pain-free smiles.`,
  },
  {
    slug: 'rehab-mental-health',
    title: 'Rehabilitation & Mental Health',
    short: 'Compassionate support and professional treatment for mental wellbeing.',
    icon: wellnessIcon,
    image: rehabImage,
    features: [
      'Structured Alcohol Addiction Rehabilitation',
      'Compassionate Drug abuse recovery',
      'Medically Supervised Detoxification',
      'Professional Counseling & Psychotherapy',
      'Holistic Psychological support',
      'Clinical Depression management',
      'Targeted Stress & Anxiety Management',
      'Specialized Bipolar disorder support',
      'Comprehensive Schizophrenia management',
    ],
    detail: `Mental and emotional well-being are the cornerstones of a healthy, fulfilling life. If you or a loved one are facing mental health challenges or navigating the road to addiction recovery, please know that you are not alone. Our dedicated behavioral health department provides a safe, completely confidential, and judgment-free environment for healing. Managed by compassionate psychiatrists, psychologists, and addiction counselors, we combine modern psychiatric treatments with personalized psychological support. We are fully committed to walking with you through every stage of therapy, stabilization, and rehabilitation to help you reclaim your peace, strength, and overall quality of life.`,
  },
  {
    slug: 'rheumatoid-arthritis',
    title: 'Rheumatoid Arthritis Clinic',
    short: 'Specialised joint pain management and mobility support.',
    icon: athritisIcon,
    image: athritisImage,
    features: [
      'Arthritis consultation',
      'Joint pain management',
      'Mobility & Physical therapy support',
      'Continuous Long-term care',
      'Seasonal Flare-Up Prevention & Management',
      'Comprehensive Diagnostic Evaluations & Advanced Pain Therapies',
      'Long-Term Care Plans to Minimize Discomfort & Protect Joints',
    ],
    detail: `Chronic joint pain and arthritis can severely limit your freedom, especially during cold weather conditions when drops in temperature often cause joint stiffness and increased discomfort. If you or an older family member are struggling with stiff, aching joints, our specialized clinic is here to provide much-needed relief. We offer comprehensive diagnostic evaluations, advanced pain therapies, and continuous long-term care plans. Our goal is to minimize your discomfort, protect your joints from further wear, and restore the vital physical mobility you need to live an active, pain-free life.`,
  },
  {
    slug: 'home-nursing',
    title: 'Home-based Care & Nursing',
    short: 'Compassionate medical care delivered in the comfort of your home.',
    icon: homeCareIcon,
    image: chronicCareImage,
    features: [
      'Compassionate Cancer patient care',
      'Stroke patient support',
      'Professional Elderly Care & Geriatrics',
      'Attentive Post-Surgery Home Care',
      'Advanced Bed Sore Management & Prevention',
    ],
    detail: `Recovering from a severe illness or managing an advanced health condition is often easiest in a familiar, comforting environment. Our home-based clinical care services bring high-quality, compassionate medical attention straight to your doorstep, eliminating the stress and exhaustion of frequent hospital visits. Managed by experienced nurses and visiting clinicians, we provide specialized medical support tailored entirely to your family's needs. We combine precise clinical monitoring with gentle, dignified care to ensure safety, accelerate recovery, and provide absolute peace of mind for you and your loved ones at home.`,
  },
  {
    slug: 'medical-exams',
    title: 'Medical Examinations & Certificates',
    short: 'Medical examinations and health certificates for employment and travel.',
    icon: certificateIcon,
    image: certificateImage,
    features: [
      'Official Medical examinations',
      'Accurate Completion of Medical forms',
      'Certified Health certificates',
      'Corporate Employment medical assessments',
      'Food Handlers & Hospitality Screenings',
    ],
    detail: `Navigating administrative, educational, or professional transitions often requires official verification of your physical health. Our hospital provides streamlined, legally compliant medical examinations and documentation services tailored to meet strict regulatory and corporate standards. Whether you require standard health clearings, detailed pre-employment physicals, or certified documentation for official bodies, our clinical team conducts thorough assessments with high accuracy and rapid turnaround times. We ensure your paperwork is processed professionally and efficiently so you can move forward with your career or personal goals without unnecessary delays.`,
  },
  {
    slug: 'immunization',
    title: 'Immunization Services',
    short: 'Preventive vaccines for children and travellers.',
    icon: immunizationIcon,
    image: immunizationImage,
    features: [
      'Certified Travel immunization',
      'Routine Preventive vaccines',
      'Urgent Anti-rabies vaccination',
      'Comprehensive Child Immunization (KEPI Standard)',
      'Corporate & Institutional Vaccine Drives',
    ],
    detail: `Immunization is one of the most powerful tools available to shield your loved ones from severe, preventable illnesses. Our dedicated clinic offers safe, highly effective immunizations that adhere strictly to national health guidelines and international medical standards. Whether you are safeguarding your child's early developmental milestones, preparing for international travel, or seeking urgent post-exposure protection, our clinical team manages a fully secure, temperature-controlled vaccine inventory. We provide smooth, gentle administration and comprehensive tracking to ensure long-term immunity and total peace of mind for your family.`,
  },
  {
    slug: 'screening',
    title: 'Screening Services',
    short: 'Early detection services for better outcomes.',
    icon: labIcon,
    image: screeningImage,
    features: [
      'Breast cancer screening',
      'Prostate screening',
      'Cervical cancer screening',
      'Colorectal Health Risk Screening',
      'Post-Screening Guidance',
    ],
    extra: 'Early detection saves lives.',
    detail: `When it comes to oncology, early detection is the single most powerful factor in saving lives and ensuring successful treatments. Many cancers develop quietly without showing any early symptoms, which is why routine health checks are so vital. Our diagnostic department offers a safe, highly confidential, and supportive environment for proactive screenings. Managed by compassionate medical experts using modern testing solutions, these preventative screenings are designed to identify health risks at their earliest, most treatable stages, providing you with clear answers and total peace of mind.`,
  },
  {
    slug: 'emergency',
    title: 'Emergency & Snake Bite Treatment',
    short: 'Urgent response and emergency care.',
    icon: hourglassIcon,
    image: medsImage,
    features: [
      '24/7 Rapid Emergency response',
      'Specialized Snakebite & Envenomation Treatment',
      'Immediate Urgent medical care',
      'Advanced Trauma Stabilization & Resuscitation',
      'Comprehensive Post-Emergency Care & Rehabilitation',
      'On-site Ambulance Services for Rapid Transport',
      'On-Site Emergency Pharmacy & Lab Coordination',
    ],
    detail: `In a medical emergency, every single second counts. Our emergency department stands ready 24 hours a day, 7 days a week, to deliver rapid, life-saving medical intervention when you need it most. Whether it is a sudden severe illness, a traumatic injury, or a time-sensitive crisis like a venomous snakebite, our highly trained trauma clinicians and emergency response teams are equipped to stabilize and treat patients instantly. Supported by an on-site ambulance team and advanced critical care technology, we provide the fast, reliable, and expert medical shield your family can depend on in life's most unpredictable moments.`,
  },
  {
    slug: 'specialist-clinics',
    title: 'Specialist Clinics',
    short: 'Access to a range of specialist consultations.',
    icon: specialistIcon,
    image: outpatientImage,
    features: [
      'Expert OB/GYN Consultations',
      'Orthopedic & Advanced Trauma Clinic',
      'Comprehensive Physician consultations',
      'Advanced General Surgery Evaluations',
      'Specialized Dental specialists',
    ],
    detail: `Some health conditions require advanced medical expertise that goes beyond everyday general practice. Our hospital hosts dedicated specialist clinics where patients can access highly focused diagnostic insights and advanced treatments from certified consultants across multiple medical fields. Whether you require expert prenatal surveillance, bone and joint reconstruction, internal medicine assessments, or complex surgical evaluations, our specialists work collaboratively under one roof. We blend specialized modern medical solutions with comprehensive follow-up care to guide you safely through your recovery journey.`,
  },
  {
    slug: 'speech-therapy',
    title: 'Speech Therapy',
    short: 'Support for communication and speech development.',
    icon: voiceIcon,
    image: voiceImage,
    features: [
      'Early Childhood Speech Development Support',
      'Comprehensive Communication & Expression Therapy',
      'Cross-Age Children & Adult Speech Support',
      'Post-Stroke & Neurological Speech Rehabilitation',
      'Swallowing & Dysphagia Therapy',
    ],
    detail: `Clear communication is essential for connecting with the world, building confidence, and succeeding in everyday life. Whether a child is struggling to meet early milestones or an adult is rebuilding their communication skills after a stroke or medical trauma, our dedicated speech therapy clinic offers a supportive, empowering path forward. Managed by certified speech-language therapists, we design personalized, evidence-based therapy plans tailored to each individual's unique needs. We combine modern therapeutic exercises with compassionate guidance to help patients overcome speech barriers, strengthen cognitive expression, and find their voice at any stage of life`,
  },
  {
    slug: 'physiotherapy',
    title: 'Physiotherapy',
    short: 'Rehabilitation and mobility improvement services.',
    icon: physioIcon,
    image: rehabImage,
    features: [
      'Targeted Injury Recovery & Sports Rehabilitation',
      'Functional Mobility & Balance Improvement Therapy',
      'Advanced Non-Invasive Pain Management Solutions',
      'Comprehensive Physical Rehabilitation & Strengthening Programs',
      'Post-Surgical Orthopedic Physiotherapy',
    ],
    detail: `Regaining your physical independence and living free from chronic pain is vital for a fulfilling life. Whether you are recovering from a recent sports injury, managing a long-term physical condition, or restoring strength after a major surgical procedure, our dedicated physiotherapy clinic offers a clear pathway to healing. Managed by certified physical therapists using modern rehabilitation equipment, we design personalized treatment plans tailored specifically to your body's needs. We focus on targeted exercises, manual therapies, and patient education to accelerate your body's natural recovery, optimize joint function, and safely restore your daily movement.`,
  },
  {
    slug: 'Pharmacology',
    title: 'Pharmacology',
    short: 'Drug information and management services.',
    icon: medicineIcon,
    image: medicineImage,
    features: [
      'Prescription Management',
      'Drug Interaction Check',
      'Medication Adherence Support',
      'Comprehensive Drug Information Services',
      'Personalized Medication Plans',
    ],
    extra: 'Our pharmacology clinic is managed by certified pharmacists who provide personalized medication plans tailored to your specific needs.',
    detail: `Understanding your medications and how they interact with your body is crucial for effective treatment and safety. Our dedicated pharmacology clinic provides comprehensive drug information services, ensuring you have the knowledge needed to make informed decisions about your health. Managed by certified pharmacists, we offer personalized medication plans tailored to your specific needs. We focus on prescription management, drug interaction checks, and medication adherence support to optimize your therapeutic outcomes and minimize potential risks.`,
  },
  {
      slug: 'other-Services',
      title: 'Other Services',
      short: 'Additional health services available.',
      icon: weightlossIcon,
      image: weightlossImage,
      features: [
        'Medically Supervised Weight Loss & Management Programs',
        'Comprehensive BMI & Body Composition Analysis',
        'Personalized Nutrition Counseling',
        'Lifestyle Modification Strategies',
        'Behavioral Health Support',
        'Progress Monitoring & Reporting',
      ],
      detail: `True healthcare extends far beyond treating illness—it is about empowering you to achieve optimal vitality and long-term well-being. Our specialized wellness clinic offers structured, medically supervised programs designed to help you reach your personal health goals safely and sustainably. Whether you are seeking a customized weight management plan, corporate lifestyle coaching, or specialized nutritional therapy, our expert clinical team combines advanced diagnostics with ongoing lifestyle guidance. We provide the practical tools and dedicated professional support necessary to transform your habits, prevent chronic risks, and elevate your overall quality of life.`,
    },
]

export default services
