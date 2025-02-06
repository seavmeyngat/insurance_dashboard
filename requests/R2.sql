--insert data quotation
INSERT INTO public.quotation(
	company_id, insurance_broker_id, date_issued, proposed_premium, sum_insured, coverage_details, quotation_status, acceptance_date)
	VALUES ('6', '3', '2025-01-03', '300.00', 10000.00, 'Personal Accident Coverage ', 'Pending', null);

--insert data company
INSERT INTO public.company(
	company_name, contact_email, phone_number, address, industry_type, license_number)
	VALUES ('东方科技有限公司', 'meyyyy@dongfangtech.com', '+86 10 1234 566', '北京市朝阳区科技路10号', 'Technology', 'CN12345678');


--delete colum
ALTER TABLE insured_coverage
DROP COLUMN date_of_birth; 