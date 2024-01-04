
# from Source.classes.mail_class import Mail
# from firebase_admin import db
# from datetime import datetime, timedelta
# from apscheduler.schedulers.background import BackgroundScheduler

# mail = Mail()

# def process_room(username, room_name, current_time):
#     ref = db.reference(f'Accounts/{username}/email')
#     user_email = ref.get()
#     plants = db.reference(f'MyRoom/{username}/{room_name}').get()

#     if plants is None:
#         return

#     for plant_id, _ in plants.items():
#         schedule_ref = db.reference(f'MyRoom/{username}/{room_name}/{plant_id}/Schedule')
#         schedule_data = schedule_ref.get()

#         if schedule_data is None:
#             continue

#         for schedule_id, schedule in schedule_data.items():
#             # Các bước xử lý dữ liệu và gửi email ở đây
#             # Lấy thông tin thời gian và tần suất từ Firebase
#             time_start = datetime.strptime(schedule['timeStart'], '%H:%M:%S').time()
#             date_start = datetime.strptime(schedule['dateStart'], '%Y-%m-%d').date()
#             frequency = schedule['frequency']
#             frequency_type = schedule['frequencyType']

#             print(time_start, date_start, frequency, frequency_type)
#             # Tính toán thời gian dự kiến để gửi email
#             if frequency_type == 'Ngày':
#                 send_time = datetime.combine(date_start, time_start)
#                 while send_time < current_time:
#                     send_time += timedelta(days=frequency)
#             elif frequency_type == 'Tuần':
#                 send_time = datetime.combine(date_start, time_start)
#                 while send_time < current_time:
#                     send_time += timedelta(weeks=frequency)
#             elif frequency_type == 'Tháng':
#                 send_time = datetime.combine(date_start, time_start)
#                 while send_time < current_time:
#                     send_time = send_time.replace(month=send_time.month + frequency)
#             elif frequency_type == 'Năm':
#                 send_time = datetime.combine(date_start, time_start)
#                 while send_time < current_time:
#                     send_time = send_time.replace(year=send_time.year + frequency)

#             # Kiểm tra nếu thời gian gửi email gần đến (trước 5 phút)
#             if current_time <= send_time <= current_time + timedelta(minutes=5):
#                 message = f"Đừng quên tưới cây cho .. bạn nhé."
#                 mail.sendNotification(user_email, message)

# from apscheduler.schedulers.background import BackgroundScheduler
# import time

# def check_and_send_emails():
#     # Lấy thời gian hiện tại
#     current_time = datetime.now()

#     # Truy vấn dữ liệu từ Firebase
#     ref = db.reference('MyRoom')
#     data = ref.get()

#     if data is None:
#         return

#     for username, rooms in data.items():
#         if rooms is None:
#             continue
        
#         for room_name, _ in rooms.items():
#             if room_name == "Lưu trữ": 
#                 continue  
#             process_room(username, room_name, current_time)

# def start_email_scheduler():
#         # Tạo một BackgroundScheduler
#         scheduler = BackgroundScheduler()
#         scheduler.add_job(check_and_send_emails, 'interval', seconds=5) 
        
#         # Bắt đầu lịch trình
#         scheduler.start()

# start_email_scheduler()