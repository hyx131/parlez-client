# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Friendlist.destroy_all
Friend.destroy_all
Blacklist.destroy_all
Block.destroy_all
Chatroom.destroy_all
Participant.destroy_all
Message.destroy_all
User_Message_View.destroy_all