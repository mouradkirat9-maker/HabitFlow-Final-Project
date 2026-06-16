export async function fetchDailyQuote(){
 try{
  const response=await fetch('https://api.quotable.io/random');
  if(!response.ok){console.error('Error fetching quote:',response.status);return 'Small steps every day create big results.';}
  const data=await response.json();
  return data.content || 'Small steps every day create big results.';
 }catch(error){
  console.error('Error fetching quote:',error);
  return 'Small steps every day create big results.';
 }
}
