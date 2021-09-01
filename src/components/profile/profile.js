import { Button, makeStyles } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { hideInfo } from "../profile"
export * from "../buttons/button-profile"

export const Profile = () => {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      color: "blanchedalmond",
    },
  }))
  const classes = useStyles()

  const { id, name, email } = useSelector((state) => state.profile.user)
  const infoVisible = useSelector((state) => state.profile.infoVisible)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>ID пользователя: </h2>
      {infoVisible && <p>{id}</p>}
      <h3>Фамилия Имя Отчество: </h3> {infoVisible && <p>{name}</p>}
      <h3>Электронная почта: </h3>
      {infoVisible && <p>{email}</p>}
      <Button
        variant="contained"
        color="white"
        className={classes.button}
        onClick={() => dispatch(hideInfo())}
      >
        <Link>
          {infoVisible
            ? "Скрыть информацию о пользователе"
            : "Показать информацию о пользователе"}
        </Link>
      </Button>
    </div>
  )
}
