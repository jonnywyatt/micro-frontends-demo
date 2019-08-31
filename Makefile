all:
	cd service-parent; npm i && npm run build
	cd service-child; npm i && npm run build
	cd service-child-2; npm i && npm run build
	cd service-child-3; npm i && npm run build
