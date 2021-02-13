# Dictionary full of info
my_info = {"name":"Dharshu",
            "age":5,
            "hobbies":["drawing","playing","reading","crafting"],
            "wake_up":{"mon":["7:30am","8am"],"Tues":"7:00am","Week_end":"9:00am"}
}
print(my_info.keys())
print(my_info)
# Print out results are stored in the dictionary
print(f'Hello!! I am {my_info["name"]}')
print(f'I am {str(my_info["age"])} years old')
print(f'My hobbies are: {my_info["hobbies"]}')
print(f'I wake up at {my_info["wake_up"]["mon"][0]}')