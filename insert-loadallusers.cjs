const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const targetStr = `  const loadAccessCodes = async () => {`;
const insertStr = `  const loadAllUsers = async () => {
    try {
      const q = query(collection(db, 'students'), orderBy('registeredAt', 'desc'));
      const snapshot = await getDocs(q);
      const users = snapshot.docs.map(doc => ({ ...doc.data() } as StudentProfile));
      setAllUsers(users);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

`;

code = code.replace(targetStr, insertStr + targetStr);
fs.writeFileSync('src/App.tsx', code);
console.log('Done');
