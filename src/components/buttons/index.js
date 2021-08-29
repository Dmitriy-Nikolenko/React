import { Grid } from "@material-ui/core"
import styles from "../../global.module.css"
import { ButtonExit } from "./button-exit"
import { ButtonIn } from "./button-in"
import { ButtonAuth } from "./button-login"
import { ProfileButton } from "./button-profile"
import { ButtonSignUp } from "./button-signUp"
import { GistIn } from "./gist-in"
export * from "./button-back"
export * from "./button-in"
export * from "./button-login"
export * from "./button-profile"
export * from "./gist-in"
export * from "./button-signUp"
export * from "./button-exit"

export function Menu() {
  return (
    <div className={styles.menu}>
      <Grid item={true}>
        <ButtonIn />
      </Grid>
      <Grid item={true}>
        <ProfileButton />
      </Grid>
      <Grid item={true}>
        <GistIn />
      </Grid>
      <Grid item={true}>
        <ButtonAuth />
      </Grid>
      <Grid item={true}>
        <ButtonSignUp />
      </Grid>
      <Grid item={true}>
        <ButtonExit />
      </Grid>
    </div>
  )
}
