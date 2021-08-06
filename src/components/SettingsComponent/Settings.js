import "./Settings.css";
import { ReactComponent as SettingsIcon } from "../../icons/settings.svg";

function Settings() {
	return (
		<div className="outer-wrap">
			<div className="settings-icons-wrapper">
				<SettingsIcon fill="#3576f9" />
			</div>
		</div>
	);
}

export default Settings;
