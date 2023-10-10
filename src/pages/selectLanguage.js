import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function SelectLanguage() {
  const { user, isAuthenticated, isLoading, error, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  console.log("user", useAuth0.user);
  // const { name, picture, email } = user;
  if (error) {
    return <div>Oops {error.message}</div>
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(user);

  // useEffect(() => {
  //   const getUserMetadata = async () => {
  
  //     try {
  //       const accessToken = await getAccessTokenSilently({
  //         authorizationParams: {
  //           audience: 'http://localhost:3006/pos-system-admin/',
  //           scope: "read:current_user",
  //         },
  //       });
  
  //       // const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  //       console.log("accessToken", accessToken);
  
  //       // const metadataResponse = await fetch(userDetailsByIdUrl, {
  //       //   headers: {
  //       //     Authorization: `Bearer ${accessToken}`,
  //       //   },
  //       // });
  
  //       // const { user_metadata } = await metadataResponse.json();
  
  //       // setUserMetadata(user_metadata);
  //     } catch (e) {
  //       console.log("error here")
  //       console.log(e.message);
  //     }
  //   };
  
  //   getUserMetadata();
  // }, [getAccessTokenSilently, user?.sub]);

  // async function getAccessToken() {
  //   try {
  //     const token = await auth0Client?.getTokenSilently();
  //     setAccessToken(token);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  console.log("isAuthenticated", isAuthenticated)
  if (isAuthenticated) {
    return (
      <div>
        <h2>{user.name}</h2>
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
