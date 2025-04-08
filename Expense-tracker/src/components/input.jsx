export default function Input({amountType})
{
    return(
        <>
         <input type="text" placeholder={amountType} className='m-2 p-2 border border-purple-400 rounded-2xl' onChange={onchange} />
        </>
    );

}