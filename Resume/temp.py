import nltk
import spacy
nltk.download('stopwords')
spacy.load('en_core_web_sm')
from streamlit_tags import st_tags
import time, datetime
from pyresparser import ResumeParser
from pdfminer3.layout import LAParams
from pdfminer3.pdfpage import PDFPage
from pdfminer3.pdfinterp import PDFResourceManager
from pdfminer3.pdfinterp import PDFPageInterpreter
from pdfminer3.converter import TextConverter
import io, random
from Courses import ds_course, web_course, android_course, ios_course, uiux_course
import json

def pdf_reader(file):
    resource_manager = PDFResourceManager()
    fake_file_handle = io.StringIO()
    converter = TextConverter(resource_manager, fake_file_handle, laparams=LAParams())
    page_interpreter = PDFPageInterpreter(resource_manager, converter)
    with open(file, 'rb') as fh:
        for page in PDFPage.get_pages(fh, caching=True, check_extractable=True):
            page_interpreter.process_page(page)
        text = fake_file_handle.getvalue()
    converter.close()
    fake_file_handle.close()
    return text

def course_recommender(course_list):
    rec_course = []
    no_of_reco = 4  # Default value, you can change it as needed
    random.shuffle(course_list)
    for c_name, c_link in course_list[:no_of_reco]:
        rec_course.append({"name": c_name, "link": c_link})
    return rec_course

def analyze_resume(pdf_file_path):
    resume_data = ResumeParser(pdf_file_path).get_extracted_data()
    if resume_data:
        resume_text = pdf_reader(pdf_file_path)
        cand_level = ''
        if resume_data['no_of_pages'] == 1:
            cand_level = "Fresher"
        elif resume_data['no_of_pages'] == 2:
            cand_level = "Intermediate"
        elif resume_data['no_of_pages'] >= 3:
            cand_level = "Experienced"

        ds_keyword = ['data science', 'data visualization', 'predictive analysis', 'statistical modeling',
                        'data mining', 'clustering & classification', 'data analytics', 'quantitative analysis',
                        'web scraping', 'ml algorithms', 'keras', 'pytorch', 'probability', 'scikit-learn',
                        'tensorflow', "flask", 'streamlit']
        web_keyword = ['react', 'django', 'node js', 'react js', 'php', 'laravel', 'magento', 'wordpress',
                        'javascript', 'angular js', 'c#', 'flask', 'sdk']
        android_keyword = ['android', 'android development', 'flutter', 'kotlin', 'xml', 'java', 'kivy',
                            'git', 'sdk', 'sqlite']
        ios_keyword = ['ios', 'ios development', 'swift', 'cocoa', 'cocoa touch', 'xcode', 'objective-c',
                        'sqlite', 'plist', 'storekit', "ui-kit", 'av foundation', 'auto-layout']
        uiux_keyword = ['ui', 'user experience', 'adobe xd', 'figma', 'zeplin', 'balsamiq', 'prototyping',
                        'wireframes', 'storyframes', 'adobe photoshop', 'editing', 'illustrator', 'after effects',
                        'premier pro', 'indesign', 'wireframe', 'solid', 'grasp', 'user research']

        recommended_skills = []
        recommended_keywords = []
        rec_course = []
        reco_field = ''

        for i in resume_data['skills']:
            if i.lower() in ds_keyword:
                reco_field = 'Data Science'
                recommended_skills = ['Data Visualization', 'Predictive Analysis', 'Statistical Modeling',
                                      'Data Mining', 'Clustering & Classification', 'Data Analytics',
                                      'Quantitative Analysis', 'Web Scraping', 'ML Algorithms', 'Keras',
                                      'Pytorch', 'Probability', 'Scikit-learn', 'Tensorflow', "Flask",
                                      'Streamlit']
                recommended_keywords = st_tags(label='### Recommended skills for you.',
                                               text='Recommended skills generated from System',
                                               value=recommended_skills, key='2')
                rec_course = course_recommender(ds_course)
                break

            elif i.lower() in web_keyword:
                reco_field = 'Web Development'
                recommended_skills = ['React', 'Django', 'Node JS', 'React JS', 'php', 'laravel', 'Magento',
                                      'wordpress', 'Javascript', 'Angular JS', 'c#', 'Flask', 'SDK']
                recommended_keywords = st_tags(label='### Recommended skills for you.',
                                               text='Recommended skills generated from System',
                                               value=recommended_skills, key='3')
                rec_course = course_recommender(web_course)
                break

            elif i.lower() in android_keyword:
                reco_field = 'Android Development'
                
                recommended_skills = ['Android', 'Android development', 'Flutter', 'Kotlin', 'XML', 'Java',
                                      'Kivy', 'GIT', 'SDK', 'SQLite']
                recommended_keywords = st_tags(label='### Recommended skills for you.',
                                               text='Recommended skills generated from System',
                                               value=recommended_skills, key='4')
                
                rec_course = course_recommender(android_course)
                break

            elif i.lower() in ios_keyword:
                reco_field = 'IOS Development'
                
                recommended_skills = ['IOS', 'IOS Development', 'Swift', 'Cocoa', 'Cocoa Touch', 'Xcode',
                                      'Objective-C', 'SQLite', 'Plist', 'StoreKit', "UI-Kit", 'AV Foundation',
                                      'Auto-Layout']
                recommended_keywords = st_tags(label='### Recommended skills for you.',
                                               text='Recommended skills generated from System',
                                               value=recommended_skills, key='5')
                
                rec_course = course_recommender(ios_course)
                break

            elif i.lower() in uiux_keyword:
                reco_field = 'UI-UX Development'
                
                recommended_skills = ['UI', 'User Experience', 'Adobe XD', 'Figma', 'Zeplin', 'Balsamiq',
                                      'Prototyping', 'Wireframes', 'Storyframes', 'Adobe Photoshop', 'Editing',
                                      'Illustrator', 'After Effects', 'Premier Pro', 'Indesign', 'Wireframe',
                                      'Solid', 'Grasp', 'User Research']
                recommended_keywords = st_tags(label='### Recommended skills for you.',
                                               text='Recommended skills generated from System',
                                               value=recommended_skills, key='6')
                
                rec_course = course_recommender(uiux_course)
                break

        ts = time.time()
        cur_date = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d')
        cur_time = datetime.datetime.fromtimestamp(ts).strftime('%H:%M:%S')
        timestamp = str(cur_date + '_' + cur_time)

        # Collecting data in JSON format
        data = {
            "resume_data": resume_data,
            "resume_text": resume_text,
            "candidate_level": cand_level,
            "recommended_skills": recommended_skills,
            "recommended_keywords": recommended_keywords,
            "recommended_courses": rec_course
        }

        return data

pdf_file_path = "./Resume/Resume_MOHIB.pdf"  # Replace with the actual path to your resume PDF file
result = analyze_resume(pdf_file_path)

# You can print or save the JSON data as needed
output_file_path = "../MentorPrep-RUBIX24/client/src/data/" + "resume_data"  + ".json"

# Save the result to a JSON file
with open(output_file_path, "w") as json_file:
    json.dump(result, json_file, indent=2)
