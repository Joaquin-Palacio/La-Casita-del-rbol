import { useAuth0 } from "@auth0/auth0-react"

export const Profile = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();
    
    if(isLoading){
        return <div>Cargando.. Por favor espere un momento</div>
    }

  return (
    isAuthenticated && (
        <div className="text-center m-1">
            <img src={user.picture} alt={user.name} className="rounded img-fluid w-25" />
            <p><b>{user.name}</b></p>
        </div>
    )
  )
}
