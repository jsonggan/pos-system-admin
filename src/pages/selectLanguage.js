import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function SelectLanguage() {
  const { user, isAuthenticated, isLoading, error, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  
  async function getAccessToken() { 
    try {
      const token = await getAccessTokenSilently();
      setAccessToken(token);
    } catch (e) {
      console.e(e);
    }
  }

  useEffect(() => {
    getAccessToken();
  }, []);

  console.log("user", useAuth0.user);
  // const { name, picture, email } = user;
  if (error) {
    return <div>Oops {error.message}</div>
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(user);
  console.log("token", getAccessTokenSilently());

  console.log("isAuthenticated", isAuthenticated)
  
  if (isAuthenticated) {
    return (
      <div>
        <h2>{user.name}</h2>
        <p className="w-full break-words">{accessToken}</p>
        <p>name?</p>
      </div>
    );
  }

  return (
    <>
      <div>
        an app to select language
      </div>
    </>

    
  );
}

export default SelectLanguage;
