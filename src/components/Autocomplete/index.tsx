import { useEffect, useMemo, useState } from "react";
import { observer } from "mobx-react-lite";

import HelpPopup from "./components/HelpPopup";
import PopupItem from "./components/PopupItem";

import { CountryInfo, getCountryByName } from "../../api/apiService";
import { useStore } from "../../store/store";
import { useDebounce } from "../../utils/hooks/useDebounce";
import { IAutocomplete } from "./interface";

import "./styles.scss"

const Autocomplete = ({ count }: IAutocomplete) => {
	const { autoCompleteStore } = useStore();
	const [fetchedItems, setFetchedItems] = useState<CountryInfo[]>();

	const debouncedSearchValue = useDebounce(autoCompleteStore.value, 100);

	useEffect(() => {
		const loadResult = async () => {
			const res = await getCountryByName(debouncedSearchValue);
			setFetchedItems(res);
		};
		loadResult();
	}, [debouncedSearchValue]);

	const handleClick = (value:string) =>{
		autoCompleteStore.setValue(value);
	}

	const popupItems = useMemo(
		() => fetchedItems?.slice(0, count).map((item, index) => <PopupItem
			key={index}
			name={item.name}
			fullName={item.fullName}
			flag={item.flag}
			onClick={(value)=>handleClick(value)}
		/>) ?? [],
		[fetchedItems]
	);

	return (
		<div className="autocomplete_wrapper">
			<input value={autoCompleteStore.value} onChange={(e) => autoCompleteStore.setValue(e.target.value)} />
			{popupItems.length !== 0 && <HelpPopup items={popupItems}></HelpPopup>}
		</div>

	)
}

export default observer(Autocomplete);