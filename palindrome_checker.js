let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",
                "o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3",
                "4","5","6","7","8","9"]

function palindrome(str) 
{
  str = str.toLowerCase();

  for (let j=0; j < str.lenght; j++)
  {
    str = str.replace(" ", "")
  }

  for (let i=0 ; i < str.length; i++)
  {
    if (alphabet.includes(str.charAt(i)) == false)
    {
      str = str.replace(str.charAt(i),"");
    }
  }


  if (str.length == 1 || str.length == 0)
  {
    return true;
  } 

  else if (str.charAt(0) == str.charAt(str.length - 1) == false)
  {
    return false;
  }

  else
  {
    return palindrome(str.slice(1,-1));
  }
}



palindrome("1 eye for of 1 eye.");
