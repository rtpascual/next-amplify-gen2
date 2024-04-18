// pages/index.tsx
import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';
import { updateUserAttribute, updateUserAttributes } from 'aws-amplify/auth';

// generate your data client using the Schema from your backend
const client = generateClient<Schema>();

export default function HomePage() {
  const [todos, setTodos] = useState<Schema['Todo'][]>([]);

  async function listTodos() {
    // fetch all todos
    const { data } = await client.models.Todo.list();
    setTodos(data);
  }

  async function updateAttribute() {
    try {
      await updateUserAttribute({
        userAttribute: {
          attributeKey: 'birthdate',
          value: '2024-04-17'
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function updateAttributes() {
    try {
      await updateUserAttributes({
        userAttributes: {
          birthdate: '2024-04-17',
          gender: 'male'
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const sub = client.models.Todo.observeQuery().subscribe(({ items }) =>
     setTodos([...items])
    );
  
    return () => sub.unsubscribe();
  }, []);

  return (
    <main>
      <h1>Update attributes</h1>
      <button onClick={updateAttribute}>Update Birth Date</button>
      <button onClick={updateAttributes}>Update Attributes</button>
      <h1>Hello, Amplify 👋</h1>
      <button onClick={async () => {
        // create a new Todo with the following attributes
        const { errors, data: newTodo } = await client.models.Todo.create({
          // prompt the user to enter the title
          content: window.prompt("title"),
          done: false,
          priority: 'medium'
        })
        console.log(errors, newTodo);
      }}>Create </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </main>
  );
}