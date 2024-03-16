CREATE TABLE diagnostic_groups (
    name TEXT,
    diagnostics TEXT,
    diagnostic_metrics TEXT
);
INSERT INTO public.diagnostic_groups ("name","diagnostics",diagnostic_metrics) VALUES
	 ('Core Biometric Measurements','Core Biometric Measurements','Waist Circumference,Height,Weight'),
	 ('Breathing and Lung Function','Breathing and Lung Function','FEV1,FVC,FEF-25-75,FEF75,FEV1 Standardised Comparison,FVC Standardised Comparison,FEF-25-75 Standardised Comparison,FEF75 Standardised Comparison,FEV1 % Predicted,FVC % Predicted,FEF-25-75 % Predicted,FEF75 % Predicted'),
	 ('Blood Pressure Profile','Blood Pressure Profile','Blood Pressure Profile (Diastolic),Blood Pressure Profile (Systolic)'),
	 ('Basic Aerobic Capacity','Astrand Treadmill Test','Astrand Treadmill Test'),
	 ('Baseline Physical Assessment','Plank Hold Assessment (Core Strength),Grip Strength Assessment,Single Leg Squat,Inline Lunge Test,Deep Squat Assessment,Trunk Stability Push-Up Test','Plank Time,Dynamometer Grip Strength (Left),Dynamometer Grip Strength (Right),Single Leg Squat (Left) (30s),Single Leg Squat (Right) (30s),Walking Lunge (30s),Bodyweight Deep Squat (30s),Push Ups (30s)'),
	 ('Beginner Physical Assessment','',''),
	 ('Advanced Physical Assessment','Advanced Muscle Strength and Stability Assessment,Multifocal Combination Assessment','Squat 5RM (85%),Deadlift 5RM (85%),Bench 5RM (85%),Overhead Press 5RM (85%),Max Pull Ups (30s),Max Tuck Jumps (30s),Farmer''s Carry (50% BW)'),
	 ('Upper Abdominal Ultrasound','Abdominal Organ Ultrasound Screening','Gall Bladder Imaging,Pancreas Imaging,Kidneys Imaging,Spleen Imaging,Abdominal Aorta Imaging,Liver Imaging'),
	 ('MRI Pelvis/Prostate','Pelvic (Prostate) MRI','Pelvic (Prostate) MRI'),
	 ('Thyroid Ultrasound','Thyroid Ultrasound','Thyroid Ultrasound');
INSERT INTO public.diagnostic_groups ("name","diagnostics",diagnostic_metrics) VALUES
	 ('CT coronary angiogram (CTCA)','CT coronary angiogram (CTCA)','Coronary Artery Findings,Non Cardiac Findings,Noncoronary Cardiac Findings'),
	 ('non-con screening MRI Brain','Brain MRI','Brain MRI'),
	 ('Non-con CT chest (everlab™ ultra-low dose protocol)','CT chest (everlab™ ultra-low dose protocol)','CT chest (everlab™ ultra-low dose protocol)'),
	 ('Fibroscan','Liver Stiffness Fibroscan','Median Liver Stiffness,Controlled Attenuated Parameter (CAP),IQR/Med Ratio'),
	 ('non-con screening MRI Spine','Spine MRI','Spine MRI'),
	 ('Renal Tract Ultrasound','Renal Tract Ultrasound','Renal Tract Ultrasound'),
	 ('CT Coronary Calcium Score','CT Coronary Calcium Score','CT Coronary Calcium Score'),
	 ('Scrotal Ultrasound','Scrotal Ultrasound','Scrotal Ultrasound'),
	 ('Exercise Stress Echocardiogram (ESE)','Exercise Stress Echocardiogram (ESE)','Exercise Stress Echocardiogram (ESE)'),
	 ('Continuous Glucose Monitor','Continuous Glucose Monitor','Continuous Glucose Monitor');
INSERT INTO public.diagnostic_groups ("name","diagnostics",diagnostic_metrics) VALUES
	 ('In-Home Sleep Test','In-Home Sleep Test','In-Home Sleep Test'),
	 ('Cronometer','Food Diary Analysis','Food Diary Analysis'),
	 ('VO2 Max Aerobic Capacity','Peak Fitness Level Assessment (VO2Max Testing)','Peak Fitness Level Assessment (VO2Max Testing)'),
	 ('AFP','Alpha Fetoprotein','Alpha Fetoprotein'),
	 ('Vit D','Vitamin D3','Vitamin D3'),
	 ('Aldosterone','Aldosterone','Aldosterone'),
	 ('Anti-CCP Ab','Anti-CCP Antibodies','Anti-CCP Antibodies'),
	 ('CA 15-3','Extended Tumour Markers Screening (Female)','Cancer Antigen 15-3 (Female),Cancer Antigen 125 (Female)'),
	 ('CA-125','Extended Tumour Markers Screening (Female)','Cancer Antigen 15-3 (Female),Cancer Antigen 125 (Female)'),
	 ('ANA','Antinuclear Antibody','Antinuclear Antibody');
INSERT INTO public.diagnostic_groups ("name","diagnostics",diagnostic_metrics) VALUES
	 ('Anti-deamidated Gliadin Antibody','Anti-deamidated Gliadin Antibody','Anti-deamidated Gliadin Antibody'),
	 ('Apolipoprotein E Genotype','Apolipoprotein E Genotype','Apolipoprotein E Genotype'),
	 ('CA 19-9','Extended Tumour Markers Screening','Cancer Antigen 19-9,Carcinoembryonic Antigen (CEA)'),
	 ('β-HCG (Female)','Beta-HCG (Female)','Beta-HCG (Female)'),
	 ('CEA','Extended Tumour Markers Screening','Cancer Antigen 19-9,Carcinoembryonic Antigen (CEA)'),
	 ('Apolipoprotein B','Apolipoprotein B','Apolipoprotein B'),
	 ('Clotting Profile','Clotting Function Profile','Activated Partial Thromboplastin Clotting Time,Fibrinogen,Prothrombin Time,Prothrombin Ratio (INR),Thrombin Time'),
	 ('Copper','Copper','Copper'),
	 ('EBV serology','EBV serology','EBV IgG serology,EBV IgM serology'),
	 ('DHEA-S','DHEA-S','DHEA-S');
INSERT INTO public.diagnostic_groups ("name","diagnostics",diagnostic_metrics) VALUES
	 ('Cortisol - morning collection (serum)','Morning Serum Cortisol','Morning Serum Cortisol'),
	 ('ECG','Electrocardiogram (ECG)','Resting Heart Rate,Trace Morphology,Rhythm,Trace Morphology (P wave deg),Trace Morphology (P wave length),Trace Morphology (PQ interval length),Trace Morphology (QRS complex deg),Trace Morphology (QRS complex length),Trace Morphology (T wave deg),Trace Morphology (QTc length),Trace Morphology (RR interval length),Trace Morphology (QT interval length)'),
	 ('ESR','Erythrocyte Sedimentation Rate','Erythrocyte Sedimentation Rate'),
	 ('Estradiol','Estradiol','Estradiol'),
	 ('PSA','Prostate-Specific Antigen (Male)','Prostate-specific Antigen (PSA) (Male)'),
	 ('FOBT','Faecal Occult Blood','Faecal Occult Blood'),
	 ('FPU uACR','Urinary Albumin-to-Creatinine Ratio (Early Kidney Protein Loss Detection)','Random Urinary Albumin,Random Urinary Creatinine,Urinary Albumin-to-Creatinine Ratio'),
	 ('Free Testosterone','Free Testosterone','Free Testosterone'),
	 ('FSH','Follicle-Stimulating Hormone','Follicle-Stimulating Hormone'),
	 ('Fasting BSL','Fasting Glucose','Fasting Glucose');
INSERT INTO public.diagnostic_groups ("name","diagnostics",diagnostic_metrics) VALUES
	 ('Homocysteine','Homocysteine','Homocysteine'),
	 ('Iga Anti-tissue Transglutaminase','Iga Anti-tissue Transglutaminase','Iga Anti-tissue Transglutaminase'),
	 ('HBsAg','Hepatitis B Surface Antigen','Hepatitis B Surface Antigen'),
	 ('Helicobacter Breath Test','Helicobacter Breath Test','Helicobacter Breath Test'),
	 ('HBsAb','Hepatitis B Surface Antibodies','Hepatitis B Surface Antibodies'),
	 ('HCV AB','Hepatitis C Antibodies','Hepatitis C Antibodies'),
	 ('Hep A IgG Ab','Hepatitis A IgG Antibody','Hepatitis A IgG Antibody'),
	 ('Growth Hormone','Growth Hormone',''),
	 ('IgE','Immunoglobulin E (IgE)','Immunoglobulin E (IgE)'),
	 ('HBA1c','HbA1c Test','HbA1c (IFCC),HbA1c (NGSP),Estimated Average Glucose');
INSERT INTO public.diagnostic_groups ("name","diagnostics",diagnostic_metrics) VALUES
	 ('Insulin - Fasting','Fasting Insulin','Fasting Insulin'),
	 ('Iron Studies','Iron Levels Analysis','Serum Iron,Transferrin Saturation,Serum Transferrin,Serum Ferritin,TIBC (Total Iron-Binding Capacity)'),
	 ('Lipids/HDL/LDL','Full Cholesterol Profiling','Total Cholesterol,Non HDL Cholesterol,Serum Triglycerides,HDL Cholesterol,LDL Cholesterol,Total Cholesterol to HDL-C ratio,Triglycerides to HDL-C Ratio'),
	 ('LH','Luteinizing Hormone','Luteinizing Hormone'),
	 ('Lipoprotein (a)','Lipoprotein (a)','Lipoprotein (a)'),
	 ('LFTs','Liver Function Panel','Serum Aspartate Transaminase,Serum Albumin,Serum Bilirubin,Serum Globulin,Serum Alkaline Phosphatase,Serum Gamma-GT,Serum Total Protein,Serum Alanine Aminotransferase'),
	 ('Serum Phosphate','Serum Phosphate','Serum Phosphate'),
	 ('Serum PTH','Serum Parathyroid Hormone','Serum Parathyroid Hormone'),
	 ('Free T3','Triiodothyronine (T3) Free','Triiodothyronine (T3) Free'),
	 ('Vit B12','Vitamin B12','Vitamin B12');
INSERT INTO public.diagnostic_groups ("name","diagnostics",diagnostic_metrics) VALUES
	 ('Testosterone','Testosterone Level','Testosterone Level'),
	 ('Blood Lead','Serum Lead Level','Serum Lead Level (ug/dL),Serum Lead Level (umol/L)'),
	 ('TSH','Thyroid Stimulating Hormone (TSH)','Thyroid Stimulating Hormone (TSH)'),
	 ('Free T4','Thyroxine (T4) Free','Thyroxine (T4) Free'),
	 ('Total IgA','Total Serum IgA','Total Serum IgA'),
	 ('RF','Rheumatoid Factor (RF)','Rheumatoid Factor (RF)'),
	 ('Progesterone','Progesterone','Progesterone'),
	 ('Blood Mercury','Serum Mercury Level','Serum Mercury Level'),
	 ('HS-CRP','High Sensitivity C-Reactive Protein','High Sensitivity C-Reactive Protein'),
	 ('Omega 3 Index (EPA and DHA) and Omega 6 to 3 Ratio','Fatty Acid Profile - Omega 3 Index (EPA and DHA) and Omega 6 to 3 Ratio','Fatty Acid Profile - Omega 3 Index (EPA and DHA) and Omega 6 to 3 Ratio');
INSERT INTO public.diagnostic_groups ("name","diagnostics",diagnostic_metrics) VALUES
	 ('Prolactin','Prolactin','Prolactin'),
	 ('Mg','Serum Magnesium','Serum Magnesium'),
	 ('MSU MCS','Urinalysis Test','Urinalysis Test'),
	 ('RAST (Rye grass, Dust mite, Cat, Dog)','RAST Panel','RAST Panel'),
	 ('Renin','Renin Level','Renin Level'),
	 ('TPO','Thyroid Peroxidase (Tpo)','Thyroid Peroxidase (Tpo)'),
	 ('Uric Acid','Uric Acid','Uric Acid (Male),Uric Acid (Female),Uric Acid'),
	 ('Pharmacogenetics Study','Pharmacogenetics Study','Pharmacogenetics Study'),
	 ('Serum Calcium','Serum Calcium','Serum Calcium,Corrected Calcium'),
	 ('Folate','Serum Folate','Serum Folate');
INSERT INTO public.diagnostic_groups ("name","diagnostics",diagnostic_metrics) VALUES
	 ('Zinc','Zinc Level','Zinc Level'),
	 ('Thyroglobulin Antibodies (Tgab)','Thyroglobulin Antibodies (Tgab)','Thyroglobulin Antibodies (Tgab)'),
	 ('CRP','C-reactive Protein','C-reactive Protein'),
	 ('Cystatin C','Cystatin C - Alternative Kidney Function Screen','Cystatin C'),
	 ('SHBG','Sex Hormone Binding Globulin','Sex Hormone Binding Globulin'),
	 ('FPU chlamydia NAAT','Chlamydia Screening Test','Chlamydia Screening Test'),
	 ('FPU gonorrhoea NAAT','Gonorrhoea Screening Test','Gonorrhoea Screening Test'),
	 ('EUC','Electrolyte Panel,Kidney Function','Serum Bicarbonate,Serum Chloride,Serum Sodium,Serum Potassium,Serum Urea,Serum Creatinine,Estimated Glomerular Filtration Rate (eGFR)'),
	 ('FBE','White Cell Count and Profile,Haemoglobin and Red Cell Analysis,Platelet Count','Eosinophils,Lymphocytes,Monocytes,Neutrophils,Total White Cell Count,Basophils,Mean Corpuscular Haemoglobin Concentration (MCHC),Haemoglobin,Mean Corpuscular Volume (MCV),Haematocrit,Red Cell Count,Red Cell Distribution Width (RDW),Mean Corpuscular Haemoglobin (MCH),Platelets'),
	 ('LDH','Lactate Dehydrogenase','Lactate Dehydrogenase');
INSERT INTO public.diagnostic_groups ("name","diagnostics",diagnostic_metrics) VALUES
	 ('Random BSL','Random Glucose','Random Glucose'),
	 ('Random Insulin','Random Insulin','Random Insulin'),
	 ('Colonoscopy','Colonoscopy','Colonoscopy'),
	 ('Gastroscopy','Gastroscopy','Gastroscopy'),
	 ('Australian Cardiovascular Disease 5 Year Risk Forecast','Australian Cardiovascular Disease 5 Year Risk Forecast','Australian Cardiovascular Disease 5 Year Risk Forecast'),
	 ('University Of Sheffield Fracture Risk Assessment','University Of Sheffield Fracture Risk Assessment','The Ten Year Probability Of Major Osteoporotic Fracture (%),The Ten Year Probability Of Hip Fracture (%)'),
	 ('HOMA-IR','HOMA-IR','HOMA-IR'),
	 ('Obesity/Sarcopenia Category','Obesity/Sarcopenia Category','Obesity/Sarcopenia Category'),
	 ('Qrisk®3-2018 (UK) Heart Attack/Stroke Risk Forecast','Qrisk®3-2018 (UK) Heart Attack/Stroke Risk Forecast','Risk of a Heart Attack or Stroke within the Next 10 Years,Healthy Heart Age,"Comparable Risk of a Healthy Person with the same Age, Sex, and Ethnicity"'),
	 ('Resting Metabolic Rate Profiling','Resting Metabolic Rate Profiling','Resting Metabolic Rate (Harris Benedict Calculation),Resting Metabolic Rate (Cunningham Equation)');
INSERT INTO public.diagnostic_groups ("name","diagnostics",diagnostic_metrics) VALUES
	 ('DEXA Body Composition Scan + Full Bone Mineral Density Scan','Dexa Body Fat Analysis,Bone Mineral Density Measurement,Dexa Visceral Adipose Tissue Analysis,Lean Mass Index','Total Body % Fat,Total Fat Mass,Fat Mass Index (Male) 18-34,Android/Gynoid Ratio,Fat Mass Index (Female) 18-34,Fat Mass Index (Male) 35-54,Fat Mass Index (Male) 55-74,Fat Mass Index (Male) 75+,Fat Mass Index (Female) 35-54,Fat Mass Index (Female) 55-74,Fat Mass Index (Female) 75+,Fat Mass Index,Left Femoral Neck Density,Right Femoral Neck Density,Lumbar Spine Density,Right Femoral Neck Density Standardised Comparison,Left Femoral Neck Density Standardised Comparison,Lumbar Spine Density Standardised Comparison,Estimated VAT volume,Estimated VAT mass,Lean Mass Of Arms,Lean Mass Of Legs,Relative Skeletal Muscle Index (RSMI)'),
	 ('IGF-1','Insulin-like growth factor 1','IGF-1');
