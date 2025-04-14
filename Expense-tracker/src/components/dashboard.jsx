import React, { useState } from 'react';
import Input from './input';


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
  // const [inputValues, setInputValues] = useState({
  //   income: '',
  //   expense: ''
  // });

  const[incomeValue, setIncomeValue] = useState('');
  const[expenseValue, setExpenseValue] = useState('');

  const [expenseList, setExpenseList] = useState([]);
  const [description, setDescription] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    const operation = e.target.value;

    if (operation === 'income') {
      const newIncome = income + parseFloat(incomeValue);
      setIncome(newIncome);
      localStorage.setItem("income", newIncome) // Used LocalStorage to store the item 
      setSaving(newIncome - expense);
      }

    if (operation === 'expense') {

      const newExpense = expense + parseFloat(expenseValue); 
      if (!selectedCategory) {
        alert("Please select a category");
        return;
      }

      setExpense(newExpense);
      if(!isNaN(income-newExpense))
      {
        setSaving(income - newExpense);
        if(newExpense > income)
        {
          alert("You are out of money")
        }
      }
     
      if (selectedCategory) {
        setCategory(prev => ({
          ...prev,
          [selectedCategory]: prev[selectedCategory] + parseFloat(expenseValue)
        }));
         
        if(!isNaN(income-newExpense))
          {
          
            const item = `${selectedCategory} : ${+(expenseValue)}, Details : ${description}` // Created a list for appending in UL.
            setExpenseList(prev => [...prev, item])
          }
          else{
            alert("Please enter a valid input")
          }
      }
    }

    // Reset input values
    setExpenseValue('');
    setIncomeValue('')
  }

  return (
    <>
    <div className='flex '>
    <h2 className=' fixed mb-7 bg-amber-200 px-7 pb-2 rounded-xl pt-1 font-bold ml-85 text-green-800 '>Expense Tracker</h2> 
      <div className='border border-amber-300 rounded-2xl py-7 px-5 m-6 '>                      
        <div className=''>
        <div className='pl-22'>
          
         <Input 
              placeholder={"Income"} 
              value={incomeValue} 
              onChange={(e) => setIncomeValue(e.target.value)}
         />
          <button 

              value="income"
              onClick={handleClick}
            
          >
            Add Income
          </button>

        </div>

        <div className='m-3 my-9 flex md:justify-center'>

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
        

        <Input 
              placeholder={"Expense"} 
              value={expenseValue} 
              onChange={(e) => setExpenseValue(e.target.value)}
         />
      
         <Input 

              placeholder={"Description"}
              value={description}
              onChange={(e) => setDescription(e.target.value)

              }
         />

          <button 
              value="expense" 
              onClick={handleClick}
              className=''
          >
            Add Expense
          </button>
  
         </div>
        </div>
        <div className='border rounded-2xl px-4 flex mt-10 p-3 flex-col md:justify-around md:flex-row w-3xl'>
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
      <div>

        <h2 className=' fixed mb-7 bg-amber-200 bg-opacity-50 px-7 pb-2 rounded-xl pt-1 ml-8 text-red-500 '>Expense List</h2>  
        <div className="border rounded-2xl mt-4 m-3 pt-4 px-22 overflow-y-auto h-98">
  <ul>
    {expenseList.map((item, index) => (
      <li key={index} className="text-red-200 text-left">{item}</li>
    ))}
  </ul>
</div>
      </div>
    </div>
    </>
  );
}

