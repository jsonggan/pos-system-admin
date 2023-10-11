import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function VerifyUser() {
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

  const requestWithJWT = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8090/create_tenant', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', `Bearer ${accessToken}`);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.responseText);
      } else if (xhr.readyState === 4) {
          console.log(xhr.status, xhr.statusText);
      }
    };
    let data = JSON.stringify({
        "email": user.email,
    });
    xhr.send(data);
  }

  useEffect(() => {
    getAccessToken();
  }, []);

  if (error) {
    return <div>Oops {error.message}</div>
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        <h2>{user.email}</h2>
        <img src={user.picture} />
        <p className="w-full break-words">{accessToken}</p>
        <button onClick={requestWithJWT}>Request by access token</button>
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

export default VerifyUser;
