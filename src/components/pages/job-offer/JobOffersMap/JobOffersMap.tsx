'use client';

import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import { Box, useColorScheme } from '@mui/material';
import { useEffect, useRef } from 'react';
import { TOP_OFFSET } from '../../home/const';
import { JobOfferComponentProps } from '../types';

const MAPTILER_API_KEY = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;
export function JobOffersMap({ offer }: JobOfferComponentProps) {
	const mapContainer = useRef<HTMLDivElement>(null);
	const map = useRef<maptilersdk.Map>(null);
	const { mode } = useColorScheme();

	const styleAdress =
		mode === 'dark'
			? 'ce102dd9-4063-4186-a993-ff95a539fca7'
			: '0197cb04-ec1b-7452-bc0d-39a02f4ba039';
	const CUSTOM_STYLE_URL = `https://api.maptiler.com/maps/${styleAdress}/style.json?key=z7iGzSLh53F8TdrmZbkk`;

	useEffect(() => {
		if (!offer?.location) return;
		if (map.current) return;
		if (!mapContainer.current) return;

		map.current = new maptilersdk.Map({
			container: mapContainer.current,
			style: CUSTOM_STYLE_URL,
			center: [offer?.location.lng, offer?.location.lat],
			zoom: 14,
		});
	}, [offer]);

	useEffect(() => {
		if (!map.current) return;
		map.current.setStyle(CUSTOM_STYLE_URL);
	}, [mode]);

	if (!MAPTILER_API_KEY) return <div>Provide a Maptiler API key</div>;
	maptilersdk.config.apiKey = MAPTILER_API_KEY;

	if (!offer) return null;
	return (
		<Box
			sx={{
				position: 'sticky',
				top: TOP_OFFSET,
				height: `calc(100vh - ${TOP_OFFSET}px)`,
			}}>
			<Box sx={{ position: 'relative', height: '100%', width: '100%' }}>
				<Box
					sx={{ position: 'absolute', width: '100%', height: '100%' }}
					ref={mapContainer}
				/>
			</Box>
		</Box>
	);
}
