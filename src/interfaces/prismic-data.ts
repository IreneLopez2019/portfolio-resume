import { ImageField, TitleField, RichTextField } from '@prismicio/types';

export interface Header {
	header_name: TitleField<'filled'>;
	header_picture: ImageField;
	header_name_deco: ImageField;
}

export interface Contact {
	contact_data: {
		icon: ImageField;
		text: RichTextField<'filled'>;
	}[];
}

export interface WorkExperience {
	work_experience_title: TitleField<'filled'>;
	work_experience_data: {
		years: TitleField;
		data: RichTextField<'filled'>;
	}[];
}

export interface Skills {
	skills_title: TitleField;
	skills_data: RichTextField<'filled'>;
}

export interface Tools {
	tools_title: TitleField;
	tools_data: {
		name: TitleField;
		data: RichTextField<'filled'>;
	}[];
}

export interface Education {
	education_title: TitleField;
	education_data: {
		year: TitleField;
		data: RichTextField<'filled'>;
	}[];
}

export interface ComplementaryEducation {
	complementary_education_title: TitleField;
	complementary_education_data: {
		years: TitleField;
		data: RichTextField<'filled'>;
	}[];
}

export interface Theme {
	theme_accent: string;
	theme_primary: string;
	theme_secondary: string;
	theme_tertiary: string;
}

export interface PrismicData extends Header, Contact, WorkExperience, Skills, Tools, Education, ComplementaryEducation, Theme {}
