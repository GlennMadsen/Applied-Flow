import React from "react";
import AppliedFlow from "../AppliedFlow/AppliedFlow";

function itemList(ItemComponent, itemName) {
	return class extends React.Component {
		constructor(props) {
			super(props);

			this.createItem = this.createItem.bind(this);
			this.updateItem = this.updateItem.bind(this);
			this.deleteItem = this.deleteItem.bind(this);
			this.switchItems = this.switchItems.bind(this);
		}

		render() {
			const { items, onChange, listName, className, itemClassName, ...passThroughProps } = this.props;
			return (
				<div className={className + " itemList"}>
					<div className="itemListHeader">
						{listName &&
						<h1>{listName}</h1>
						}
						<button type="button" onClick={this.createItem}>
							<svg id="i-plus" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
								<path d="M16 2 L16 30 M2 16 L30 16" />
							</svg>
						</button>
					</div>
					{items.length > 0 &&
					items.map((item, index) =>
						<div key={item.id} className="itemContainer">
							<div className="buttonGroup">
								<button disabled={(index === 0)} type="button" onClick={() => this.switchItems(index,index - 1)}>
									<svg id="i-caret-top" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
										<path d="M30 22 L16 6 2 22 Z" />
									</svg>
								</button>
								<button type="button" onClick={() => this.deleteItem(index)}>
									<svg id="i-trash" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
										<path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
									</svg>
								</button>
								<button disabled={(index === items.length - 1)} type="button" onClick={() => this.switchItems(index,index + 1)}>
									<svg id="i-caret-bottom" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
										<path d="M30 10 L16 26 2 10 Z" />
									</svg>
								</button>
							</div>
							<ItemComponent
								item={item}
								onChange={(updatedItem) => this.updateItem(index,updatedItem)}
								className={itemClassName + " item"}
								{...passThroughProps}
							/>
						</div>
					)}
				</div>
			);
		}

		createItem() {
			this.props.onChange([...this.props.items,ItemComponent.makeNewWithID(AppliedFlow.generateID())]);
		}

		updateItem(index, updatedItem) {
			let updatedItems = this.props.items;
			updatedItems[index] = Object.assign(updatedItems[index], updatedItem);
			this.props.onChange(updatedItems);
		}

		deleteItem(index) {
			let updatedItems = this.props.items;
			updatedItems.splice(index,1);
			this.props.onChange(updatedItems);
		}

		switchItems(indexA,indexB) {
			let updatedItems = this.props.items;
			let a = updatedItems[indexA];
			updatedItems[indexA] = updatedItems[indexB];
			updatedItems[indexB] = a;
			this.props.onChange(updatedItems);
		}
	}
}

export default itemList;