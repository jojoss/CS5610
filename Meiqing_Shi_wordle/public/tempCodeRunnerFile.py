
seven_letter_words = [word.lower() for word in word_list if len(word) == 7]

with open('normal.json', 'w') as f:
    json.dump(six_letter_words, f)

with open('hard.json', 'w') as f:
    json.dump(seven_letter_words, f)