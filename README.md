# 🍽️ Restaurant Self-Service Kiosk

An efficient and modern system for self-service kiosks in restaurants, developed with **Next.js, Prisma, and ShadCN**.

## 🚀 Technologies Used

- **Next.js** - React framework for fast and efficient web applications
- **Prisma** - ORM for database management
- **ShadCN** - UI library for elegant interfaces
- **Node.js** - Backend and API for database communication

## 📦 Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/GustQueiroz/FoodTotemHub
```

### 2️⃣ Install dependencies
```bash
npm install  # or yarn install
```

### 3️⃣ Configure the database
Create a **.env** file in the project root and add your database connection:
```env
DATABASE_URL="postgresql://neondb_owner:npg_TqsyajJY9fu3@ep-winter-wildflower-a419r064-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require"
```

Run Prisma migrations:
```bash
npx prisma migrate dev --name init
```

### 4️⃣ Run the project
```bash
npm run dev  # or yarn dev
```

The project will be available at **http://localhost:3000** 🚀

## ✨ Features

✅ Intuitive self-service for customers 📱
✅ Integrated payment system 🔄
✅ Real-time order management 🍕
✅ Modern and responsive interface 🖥️
✅ Optimized database with Prisma 💾

## 📜 License

This project is licensed under the **MIT** license. Feel free to use and contribute!

---

Made with ❤️ by Gustavo Queiroz (https://github.com/GustQueiroz)

