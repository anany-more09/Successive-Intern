import React, { useState } from 'react';

export default function Dashboard() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [saving, setSaving] = useState(0);
  const [category, setCategory] = useState({
    food: 0,
    travel: 0,
    other: 0
  });
  const [selectedCategory, setSelectedCategory] = useState('');
  const [inputValues, setInputValues] = useState({
    income: '',
    expense: ''
  });

  function handleClick(e) {
    e.preventDefault();
    const operation = e.target.value;

    if (operation === 'income') {
      const newIncome = income + parseFloat(inputValues.income);
      setIncome(newIncome);
      setSaving(newIncome - expense);
      }

    if (operation === 'expense') {

      const newExpense = expense + parseFloat(inputValues.expense);
      if (!selectedCategory) {
        alert("Please select a category");
        return;
      }

      setExpense(newExpense);
      setSaving(income - newExpense);

      if (selectedCategory) {
        setCategory(prev => ({
          ...prev,
          [selectedCategory]: prev[selectedCategory] + parseFloat(inputValues.expense)
        }));
      }
    }

    // Reset input values
    setInputValues({ income: '', expense: '' });
  }

  return (
    <>
      <div className='border border-amber-300 rounded-2xl py-5 px-8 m-4'>
        <div className=''>
          <input
            type="text"
            placeholder="Income"
            className='m-2 p-2 border border-purple-400 rounded-2xl'
            value={inputValues.income}
            onChange={(e) =>
              setInputValues(prev => ({
                ...prev,
                income: e.target.value
              }))
            }
          />

          <button value="income" onClick={handleClick}>
            Add Income
          </button>

          
        </div>

        <div className='m-3 my-9 flex md:justify-start'>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className='border px-1 rounded-2xl '
            required
          >
            <option value="">Category</option>
            <option value="food" className='text-black'>Food</option>
            <option value="travel" className='text-black'>Travel</option>
            <option value="other" className='text-black'>Other</option>
          </select>
          <input
            type="text"
            placeholder="Expenses"
            value={inputValues.expense}
            onChange={(e) =>
              setInputValues(prev => ({
                ...prev,
                expense: e.target.value
              }))
            }
            className='m-2 p-2 border border-purple-400 rounded-2xl'
          />

          <button value="expense" onClick={handleClick}>
            Add Expense
          </button>
        </div>

        <div className='border rounded-2xl px-4 flex mt-10 p-3 flex-col md:justify-around md:flex-row'>
          <h2 className='text-white font-bold mx-2'>Income:<span className='text-green-600 m-2'>$ {income}</span></h2>
          <h2 className='text-whitefont-bold mx-2'>Expenses:<span className='text-red-500 m-2'>$ {expense}</span></h2>
          <h2 className='text-white font-bold mx-2'>Total Saving:<span className='text-blue-600 m-2'>$ {saving}</span></h2>
        </div>

        <div className='border rounded-2xl px-1 flex mt-10 p-3 flex-col md:justify-around md:flex-row'>
          <h2 className='text-white font-bold'>Food : $ {category.food}</h2>
          <h2 className='text-white font-bold'>Travel : $ {category.travel}</h2>
          <h2 className='text-white font-bold'>Others: $ {category.other}</h2>
        </div>
      </div>
    </>
  );
}
