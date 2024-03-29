import csv

# Entire courseData dictionary
courseData = {
    'UTC2112/UTS2112': {
        'name': 'Animals and the City',
        'prof': '',
        'type': 'Senior Seminar',
    },
    'UTC2118': {
        'name': 'The Anatomy of Crime',
        'prof': 'Dr Serena Seah',
        'type': 'Senior Seminar',
    },
    'UTC2109/UTS2109': {
        'name': 'Asia Now! The Archaeology of the Future City',
        'prof': 'Dr Margaret Tan',
        'type': 'Senior Seminar',
    },
    'UTS2103/UTC2103': {
        'name': 'Biomedicine and Singapore Society',
        'prof': 'Dr Serena Seah',
        'type': 'Senior Seminar',
    },
    'UTC2102': {
        'name': 'Climate Change',
        'prof': 'Dr Connor Graham',
        'type': 'Senior Seminar',
    },
    'UTC2113': {
        'name': 'Gaming Life',
        'prof': 'Ms Cera Tan',
        'type': 'Senior Seminar',
    },
    'UTS2110/UTC2110': {
        'name': 'Happiness By Design',
        'prof': 'Dr John Wee',
        'type': 'Senior Seminar',
    },
    'UTS2100/UTC2100': {
        'name': 'Intelligence and Singapore Society',
        'prof': 'Dr Connor Graham, Mr Shamraz Anver',
        'type': 'Senior Seminar',
    },
    'UTC2108': {
        'name': 'Knowledge and Expertise',
        'prof': 'Dr Connor Graham, Dr Eric Kerr',
        'type': 'Senior Seminar',
    },
    'UTC2107': {
        'name': 'Negotiating in a Complex World',
        'prof': 'Dr Michael Grainger, Dr Kuan Yee Han',
        'type': 'Senior Seminar',
    },
    'UTC2111': {
        'name': 'Picturing and Seeing Development',
        'prof': 'Mr Shamraz Anver',
        'type': 'Senior Seminar',
    },
    'UTS2105/UTC2105': {
        'name': 'Singapore as "Model" City?',
        'prof': 'Dr Margaret Tan',
        'type': 'Senior Seminar',
    },
    'UTC2117': {
        'name': 'Skin',
        'prof': 'Dr Celine Coderey',
        'type': 'Senior Seminar',
    },
    'UTS2114/UTC2114': {
        'name': 'Technologies and Ageing in Singapore',
        'prof': 'Dr Kuan Yee Han',
        'type': 'Senior Seminar',
    },
    'UTC2116/UTS2116': {
        'name': 'The University Today',
        'prof': 'Dr Gene Navera',
        'type': 'Senior Seminar',
    },
    'UTC2101': {
        'name': 'Time and Life',
        'prof': 'Dr Céline Coderey, Dr Eric Kerr',
        'type': 'Senior Seminar',
    },
    'UTC1119': {
        'name': 'Crime and Punishment',
        'prof': 'Dr Michael Grainger',
        'type': 'Junior Seminar',
    },
    'UTC1115': {
        'name': 'Engineering Marvels',
        'prof': 'Dr Ernest Tan',
        'type': 'Junior Seminar',
    },
    'UTC1102B': {
        'name': 'The Darwinian Revolution',
        'prof': 'Dr John van Wyhe',
        'type': 'Junior Seminar',
    },
    'UTC1120': {
        'name': 'Emotions and Society',
        'prof': 'Mr Shamraz Anver',
        'type': 'Junior Seminar',
    },
    'UTC1102C': {
        'name': 'Fakes',
        'prof': 'Dr Eric Kerr',
        'type': 'Junior Seminar',
    },
    'UTC1113': {
        'name': 'Ignorance and Uncertainty',
        'prof': 'Dr John Wee',
        'type': 'Junior Seminar',
    },
    'UTC1102D': {
        'name': 'Images',
        'prof': 'Associate Professor John Phillips',
        'type': 'Junior Seminar',
    },
    'UTC1102S': {
        'name': 'Living and Dying in the Internet Age',
        'prof': 'Dr Connor Graham',
        'type': 'Junior Seminar',
    },
    'UTC1102P': {
        'name': 'Murals: Expressions from/on the Walls',
        'prof': 'Dr Margaret Tan',
        'type': 'Junior Seminar',
    },
    'UTC1102G': {
        'name': "Proof: What's truth got to do with it?",
        'prof': 'Professor Tay Yong Chiang',
        'type': 'Junior Seminar',
    },
    'UTC1102E': {
        'name': 'Social Innovation',
        'prof': 'Dr Dilum Wewalaarachchi',
        'type': 'Junior Seminar',
    },
    'UTC1123': {
        'name': 'The Nuclear Imagination',
        'prof': 'Dr Rafi Rashid',
        'type': 'Junior Seminar',
    }
}

# Define the CSV file name
csv_file = "course_data.csv"

# Define the fieldnames for the CSV file
fieldnames = ['course', 'name', 'prof', 'type']

# Write data to CSV file
with open(csv_file, mode='w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=fieldnames)

    # Write the header
    writer.writeheader()

    # Write the data
    for course_id, course_info in courseData.items():
        course_info['course'] = course_id  # Add the 'course' column
        writer.writerow(course_info)

print("CSV file has been created successfully.")
