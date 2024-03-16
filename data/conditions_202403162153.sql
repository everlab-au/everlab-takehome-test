CREATE TABLE conditions (
    name TEXT,
    diagnostic_metrics TEXT
);
INSERT INTO public.conditions ("name",diagnostic_metrics) VALUES
	 ('Haemochromatosis Gene Detected - At Risk of Iron Overload','C282Y Mutation,H63D Mutation'),
	 ('Likely Past History of Cleared Hepatitis B','Hep B core Total Antibody'),
	 ('Likely Reduced Vitamin B12','Holo-transcobalamin'),
	 ('Dust Mite Allergy','Dustmite'),
	 ('Alternaria Alternata Mould Allergy','Alternaria alternata'),
	 ('Rye Grass Allergy','Perennial rye grass'),
	 ('Possible Muscle Breakdown','Creatine kinase'),
	 ('Possible Pancreas Inflammation','Lipase'),
	 ('Increased Risk of Autoimmune Condition','EIA Antigen,Endomysial Antibodies,Extractable Nuclear Antigens,Antinuclear Antibody'),
	 ('Possible HIV Infection','HIV Antibodies');
INSERT INTO public.conditions ("name",diagnostic_metrics) VALUES
	 ('Low Vitamin D','"1,25 Dihydroxycalciferol"'),
	 ('Possible Syphilis Infection','Syphilis Ab'),
	 ('Immunity To Rubella Not Detected','Rubella IgG'),
	 ('Immunity To Chicken Pox Not Detected','Varicella zoster IgG'),
	 ('Increase Abdominal Arterial Aneurysm Risk','Abdominal Aorta Imaging'),
	 ('Anatomical Abnormality of Pancreas','Pancreas Imaging'),
	 ('Anatomical Abnormality of Liver','Liver Imaging'),
	 ('Anatomical Abnormality of Spleen','Spleen Imaging'),
	 ('Anatomical Abnormality of Gallbladder','Gall Bladder Imaging'),
	 ('Anatomical Abnormality of Kidneys','Kidneys Imaging');
INSERT INTO public.conditions ("name",diagnostic_metrics) VALUES
	 ('Reduced Flexibility','Active Straight-Leg Raise Right (FMS),Active Straight-Leg Raise Left (FMS),Stand & Reach Test'),
	 ('Suboptimal Features on Advanced Muscle Strength and Stability Assessment','Squat 5RM (85%),Overhead Press 5RM (85%),Bench 5RM (85%),Deadlift 5RM (85%)'),
	 ('Increased Risk of Liver Cancer','Alpha Fetoprotein'),
	 ('Increased Risk of Rheumatoid Arthritis','Anti-CCP Antibodies,Rheumatoid Factor (RF)'),
	 ('Increased Risk of Coeliac Disease','Anti-deamidated Gliadin Antibody,Iga Anti-tissue Transglutaminase'),
	 ('Increased Atherosclerotic Disease Risk Due to Suboptimal Lipid Profile','Apolipoprotein B,LDL Cholesterol,Lipoprotein (a)'),
	 ('Reduced Aerobic Capacity','Astrand Treadmill Test'),
	 ('Increased Cardiovascular Disease Risk','Australian Cardiovascular Disease 5 Year Risk Forecast'),
	 ('Abnormal Beta-HCG Levels','Beta-HCG (Female)'),
	 ('Suboptimal Diastolic Blood Pressure','Blood Pressure Profile (Diastolic)');
INSERT INTO public.conditions ("name",diagnostic_metrics) VALUES
	 ('Suboptimal Systolic Blood Pressure','Blood Pressure Profile (Systolic)'),
	 ('Suboptimal Bone Density','Right Femoral Neck Density,Left Femoral Neck Density,Lumbar Spine Density,Right Femoral Neck Density Standardised Comparison,Left Femoral Neck Density Standardised Comparison,Lumbar Spine Density Standardised Comparison'),
	 ('Anatomical Abnormality of The Brain','Brain MRI'),
	 ('Suboptimal Lung Function','FEV1,FVC,FEF-25-75,FEF75,FEV1 Standardised Comparison,FVC Standardised Comparison,FEF-25-75 Standardised Comparison,FEF75 Standardised Comparison,FEV1 % Predicted,FVC % Predicted,FEF-25-75 % Predicted,FEF75 % Predicted'),
	 ('Suboptimal Inflammatory State','C-reactive Protein,Erythrocyte Sedimentation Rate,High Sensitivity C-Reactive Protein'),
	 ('Likely Chlamydia Infection','Chlamydia Screening Test'),
	 ('Abnormal Clotting Function Profile','Activated Partial Thromboplastin Clotting Time,Thrombin Time,Fibrinogen,Prothrombin Time,Prothrombin Ratio (INR)'),
	 ('Abnormal Colonoscopy','Colonoscopy'),
	 ('Raised Waistline','Waist Circumference'),
	 ('Increased Lung Cancer Risk','CT chest (everlab™ ultra-low dose protocol)');
INSERT INTO public.conditions ("name",diagnostic_metrics) VALUES
	 ('Incidental Non-Cardiac Finding','Non Cardiac Findings'),
	 ('Abnormal Non-Coronary Cardiac Finding','Noncoronary Cardiac Findings'),
	 ('Abnormal Coronary Artery Finding','Coronary Artery Findings'),
	 ('Established Coronary Artery Calcification','CT Coronary Calcium Score'),
	 ('Suboptimal Functional Movement','Bodyweight Deep Squat (30s),Hurdle Step Right (FMS),Hurdle Step Left (FMS),Inline Lunge Right (FMS),Walking Lunge (30s),Rotary Stability Right (FMS),Rotary Stability Left (FMS),Shoulder Immobility Right (FMS),Shoulder Immobility Left (FMS),Single Leg Squat (Left) (30s),Single Leg Squat (Right) (30s),Push Ups (30s)'),
	 ('Elevated Body Fat Content','Fat Mass Index,Fat Mass Index (Male) 18-34,Fat Mass Index (Male) 35-54,Fat Mass Index (Male) 55-74,Fat Mass Index (Male) 75+,Fat Mass Index (Female) 18-34,Fat Mass Index (Female) 35-54,Fat Mass Index (Female) 55-74,Fat Mass Index (Female) 75+'),
	 ('Suboptimal Fat Distribution and Body Shape','Android/Gynoid Ratio'),
	 ('Suboptimal Total Body Fat','Total Body % Fat'),
	 ('Suboptimal Metabolic Health and Unfavourable Fat Distribution','Estimated VAT volume,Estimated VAT mass'),
	 ('Evidence of Previous EBV Infection','EBV IgG serology');
INSERT INTO public.conditions ("name",diagnostic_metrics) VALUES
	 ('Evidence of Recent EBV Infection','EBV IgM serology'),
	 ('Abnormal Heart Rhythm','Rhythm'),
	 ('Raised Resting Heart Rate','Resting Heart Rate'),
	 ('Abnormal Electrocardiogram (ECG) Trace','Trace Morphology,Trace Morphology (P wave deg),Trace Morphology (P wave length),Trace Morphology (PQ interval length),Trace Morphology (QRS complex deg),Trace Morphology (QRS complex length),Trace Morphology (T wave deg),Trace Morphology (QTc length),Trace Morphology (RR interval length),Trace Morphology (QT interval length)'),
	 ('Blood Electrolyte out of Reference Range','Serum Potassium,Serum Sodium,Serum Bicarbonate,Serum Chloride'),
	 ('Abnormal Features on Exercise Stress Echocardiogram','Exercise Stress Echocardiogram (ESE)'),
	 ('Increased Risk of Colorectal and Pancreatic Cancers','Carcinoembryonic Antigen (CEA)'),
	 ('Increased Risk of Breast Cancer','Cancer Antigen 19-9'),
	 ('Increased Risk of Pancreatic or Other Gastrointestinal Cancers','Cancer Antigen 125 (Female)'),
	 ('Increased Risk of Ovarian Cancer','Cancer Antigen 15-3 (Female)');
INSERT INTO public.conditions ("name",diagnostic_metrics) VALUES
	 ('Increased Bowel Cancer Risk','Faecal Occult Blood'),
	 ('Suboptimal Metabolic Health and Glucose Processing','Fasting Glucose,Fasting Insulin'),
	 ('Suboptimal Lipid Profile for Arterial Health','HDL Cholesterol,Non HDL Cholesterol,Total Cholesterol,Total Cholesterol to HDL-C ratio'),
	 ('Suboptimal Metabolic Health','Serum Triglycerides,Triglycerides to HDL-C Ratio'),
	 ('Abnormal Gastroscopy','Gastroscopy'),
	 ('Likely Gonorrhoea Infection','Gonorrhoea Screening Test'),
	 ('Low Grip Strength for Age and Gender','Dynamometer Grip Strength (Left),Dead Hang,Dynamometer Grip Strength (Right)'),
	 ('Red Cell Count and Morphology out of Normal Reference Range','Red Cell Count,Mean Corpuscular Haemoglobin (MCH),Haematocrit,Red Cell Distribution Width (RDW),Mean Corpuscular Haemoglobin Concentration (MCHC)'),
	 ('Abnormal Blood Count','Haemoglobin'),
	 ('Abnormal Red Cell Size','Mean Corpuscular Volume (MCV)');
INSERT INTO public.conditions ("name",diagnostic_metrics) VALUES
	 ('Suboptimal Metabolic Health and Increased Average Sugar Level','HbA1c (IFCC),HbA1c (NGSP),Estimated Average Glucose'),
	 ('Helicobacter Infection of Stomach','Helicobacter Breath Test'),
	 ('Vulnerable To Hepatitis A Infection','Hepatitis A IgG Antibody'),
	 ('Vulnerable To Hepatitis B Infection','Hepatitis B Surface Antibodies'),
	 ('Likely Hepatitis B Infection','Hepatitis B Surface Antigen'),
	 ('Possible Hepatitis C Infection','Hepatitis C Antibodies'),
	 ('Suboptimal Metabolic Health and Insulin Sensitivity','HOMA-IR'),
	 ('Increased Atherosclerotic Disease Risk','Homocysteine'),
	 ('Suboptimal Allergy Status','Immunoglobulin E (IgE)'),
	 ('Abnormal Iron Stores','Serum Ferritin');
INSERT INTO public.conditions ("name",diagnostic_metrics) VALUES
	 ('Abnormal Kidney Function','Estimated Glomerular Filtration Rate (eGFR)'),
	 ('Possible Kidney Function Impairment','Serum Urea,Serum Creatinine,Random Urinary Creatinine,Random Urinary Albumin'),
	 ('Raised Disease Marker','Lactate Dehydrogenase'),
	 ('Reduced Lean Mass','Lean Mass Of Legs,Relative Skeletal Muscle Index (RSMI),Lean Mass Of Arms'),
	 ('Abnormal Liver Enzymes','Serum Bilirubin,Serum Alkaline Phosphatase,Serum Alanine Aminotransferase,Serum Globulin,Serum Albumin,Serum Aspartate Transaminase,Serum Total Protein,Serum Gamma-GT'),
	 ('Fibroscan Accuracy Low','IQR/Med Ratio'),
	 ('Increased Liver Stiffness','Median Liver Stiffness'),
	 ('Fatty Liver','Controlled Attenuated Parameter (CAP)'),
	 ('Elevated Morning Cortisol Levels','Morning Serum Cortisol'),
	 ('Suboptimal Features on Combination Functional Assessment','Farmer''s Carry (50% BW),Max Pull Ups (30s),Max Tuck Jumps (30s)');
INSERT INTO public.conditions ("name",diagnostic_metrics) VALUES
	 ('Suboptimal Aerobic Fitness for Age','Peak Fitness Level Assessment (VO2Max Testing)'),
	 ('Abnormal Pelvic MRI','Pelvic (Prostate) MRI'),
	 ('Suboptimal Core Strength','Plank Time'),
	 ('Abnormal Platelet Count','Platelets'),
	 ('Increased Prostate Cancer Risk','Prostate-specific Antigen (PSA) (Male)'),
	 ('Elevated Heart Age','Healthy Heart Age'),
	 ('Increased Heart Attack and Stroke Risk','Risk of a Heart Attack or Stroke within the Next 10 Years'),
	 ('Suboptimal Metabolic Health and Blood Sugars','Random Glucose'),
	 ('Suboptimal Metabolic Health and Sugar Processing','Random Insulin'),
	 ('Likely Environmental Allergy','RAST Panel');
INSERT INTO public.conditions ("name",diagnostic_metrics) VALUES
	 ('Abnormal Renal Tract Ultrasound','Renal Tract Ultrasound'),
	 ('Suboptimal Resting Metabolic Rate and Low Lean Body Mass','Resting Metabolic Rate (Cunningham Equation),Resting Metabolic Rate (Harris Benedict Calculation)'),
	 ('Abnormal Scrotal Ultrasound','Scrotal Ultrasound'),
	 ('Low Serum Folate','Serum Folate'),
	 ('Abnormal Lead Levels','Serum Lead Level (ug/dL),Serum Lead Level (umol/L)'),
	 ('Low Serum Magnesium','Serum Magnesium'),
	 ('Elevated Mercury Levels','Serum Mercury Level'),
	 ('Low Serum Phosphate','Serum Phosphate'),
	 ('Anatomical Abnormality of The Spine','Spine MRI'),
	 ('At Risk of Autoimmune Thyroid Disease','Thyroglobulin Antibodies (Tgab),Thyroid Peroxidase (Tpo)');
INSERT INTO public.conditions ("name",diagnostic_metrics) VALUES
	 ('Abnormal Thyroid Function','Thyroid Stimulating Hormone (TSH),Thyroxine (T4) Free,Triiodothyronine (T3) Free'),
	 ('Abnormal Thyroid Ultrasound','Thyroid Ultrasound'),
	 ('Increased Risk of Fracture','The Ten Year Probability Of Major Osteoporotic Fracture (%),The Ten Year Probability Of Hip Fracture (%)'),
	 ('Suboptimal Metabolic Health and Increased Gout Risk','Uric Acid (Male),Uric Acid,Uric Acid (Female)'),
	 ('Abnormal Urine Screening Test','Urinalysis Test'),
	 ('Possible Kidney Impairment','Urinary Albumin-to-Creatinine Ratio'),
	 ('Low Vitamin B12','Vitamin B12'),
	 ('Suboptimal Vitamin D','Vitamin D3'),
	 ('White Cell Count out of Normal Reference Range','Neutrophils,Eosinophils,Basophils,Lymphocytes,Monocytes,Total White Cell Count'),
	 ('Suboptimal Zinc Level','Zinc Level');
