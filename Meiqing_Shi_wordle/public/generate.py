import nltk
import json
from nltk.corpus import words

nltk.download('words')

word_list = words.words()

normal = [word.lower() for word in word_list if len(word) == 6]
hard = [word.lower() for word in word_list if len(word) == 7]

output_file = "normal.json"
with open(output_file, "w") as f:
    json.dump(normal, f)

output_file = "hard.json"
with open(output_file, "w") as f:
    json.dump(hard, f)



