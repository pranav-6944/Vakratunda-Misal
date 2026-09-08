import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// 1. Traditional Brass Samai / Temple Diya (संत ज्ञानेश्वर महाराज समाधी मंदिर प्रतीक)
export const SamaiDiyaIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Flame */}
    <path
      d="M12 2C11 4.5 9.5 6 9.5 8C9.5 9.38 10.62 10.5 12 10.5C13.38 10.5 14.5 9.38 14.5 8C14.5 6 13 4.5 12 2Z"
      fill="#F59E0B"
    />
    <path
      d="M12 4C11.5 5.5 10.5 6.5 10.5 7.8C10.5 8.7 11.2 9.4 12 9.4C12.8 9.4 13.5 8.7 13.5 7.8C13.5 6.5 12.5 5.5 12 4Z"
      fill="#EF4444"
    />
    {/* Diya Bowl (Brass Clay Lamp) */}
    <path
      d="M5 11C5 11 6.5 14 12 14C17.5 14 19 11 19 11C19 11 19 15 15.5 16.5C15.2 16.6 15 17 15 17.5V19.5H9V17.5C9 17 8.8 16.6 8.5 16.5C5 15 5 11 5 11Z"
      fill="#D97706"
      stroke="#78350F"
      strokeWidth="1.2"
    />
    {/* Pedestal Base */}
    <path
      d="M7 21C7 20.4 7.4 20 8 20H16C16.6 20 17 20.4 17 21C17 21.6 16.6 22 16 22H8C7.4 22 7 21.6 7 21Z"
      fill="#B45309"
    />
  </svg>
);

// 2. Stainless Steel Mini Bucket for Fiery Kat / Tari (मिसळ कट बादली)
export const TariBucketIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Rising Steam */}
    <path d="M9 3C9 2 10 2 10 1" stroke="#EF4444" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M12 3.5C12 2.5 13 2.5 13 1.5" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M15 3C15 2 16 2 16 1" stroke="#EF4444" strokeWidth="1.2" strokeLinecap="round" />
    {/* Bucket Handle */}
    <path
      d="M5.5 9C5.5 5 8.5 4 12 4C15.5 4 18.5 5 18.5 9"
      stroke="#94A3B8"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Bucket Body */}
    <path
      d="M6 8L7.8 20.5C7.9 21.3 8.6 22 9.4 22H14.6C15.4 22 16.1 21.3 16.2 20.5L18 8H6Z"
      fill="#CBD5E1"
      stroke="#475569"
      strokeWidth="1.2"
    />
    {/* Crimson Red Tari Inside */}
    <ellipse cx="12" cy="9.5" rx="5.5" ry="2" fill="#B91C1C" />
    <ellipse cx="12" cy="9.5" rx="3.5" ry="1.2" fill="#DC2626" />
  </svg>
);

// 3. Authentic Maharashtrian Lavangi/Bedgi Chili (झणझणीत मिरची)
export const MaharashtrianChiliIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Green Stem */}
    <path
      d="M19 4C18 3 15.5 3 14 4.5L12.5 6"
      stroke="#16A34A"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Calyx Leaves */}
    <path
      d="M14.5 5.5C13.5 5 12 5.5 11 6.5C11.5 7.5 12.5 8 13.5 7.5C14.5 7 15 6 14.5 5.5Z"
      fill="#15803D"
    />
    {/* Fiery Red Body with Signature Curve */}
    <path
      d="M13.5 7.5C15 10 16 13 14 17C12.5 20 9.5 22 6 22C6.5 20.5 7 18.5 8 16C9.5 12 11.5 8.5 13.5 7.5Z"
      fill="#DC2626"
    />
    <path
      d="M12.5 9C13.5 11 14 13.5 12.8 16.5C11.8 19 9.8 20.5 7.5 21C8 19.5 8.5 18 9.5 15.5C10.8 12 11.8 9.8 12.5 9Z"
      fill="#EF4444"
    />
  </svg>
);

// 4. Sprouted Moth Bean (मोड आलेली मटकी उसळ)
export const SproutedMatkiIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Bean Body */}
    <ellipse cx="10" cy="14" rx="6" ry="4.5" transform="rotate(-15 10 14)" fill="#A16207" />
    <ellipse cx="9.5" cy="13.5" rx="4.5" ry="3" transform="rotate(-15 9.5 13.5)" fill="#CA8A04" />
    {/* Sprout Tail */}
    <path
      d="M13 11C15 8 16 5 19 3C19 6 18 8 15 11"
      stroke="#FDE047"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Sprout Tiny Leaf */}
    <path
      d="M19 3C18 1.5 15.5 2 15 3.5C16.5 4 18.5 4 19 3Z"
      fill="#22C55E"
    />
  </svg>
);

// 5. Crispy Kanda Bhaji Fritter (खेमका / खेकडा कांदा भजी)
export const KandaBhajiIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Spiky Fritter Silhouette */}
    <path
      d="M12 3L14 6.5L18.5 5L17 9.5L21.5 11.5L18 14.5L20.5 19L15.5 18L13 22L10.5 18L5.5 20L7.5 15L3 13.5L7 10L4.5 6L9.5 7.5L12 3Z"
      fill="#D97706"
      stroke="#B45309"
      strokeWidth="1.2"
    />
    {/* Onion Core Highlights */}
    <circle cx="12" cy="12.5" r="4.5" fill="#F59E0B" />
    <path d="M10 10C11.5 8.5 13.5 9 14.5 11" stroke="#78350F" strokeWidth="1" strokeLinecap="round" />
    <path d="M9 13C10.5 15 13 15.5 14.5 14" stroke="#78350F" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

// 6. Sabudana Vada (साबुदाणा वडा व दाण्याची चटणी)
export const SabudanaVadaIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Golden Brown Patty */}
    <circle cx="12" cy="12" r="9" fill="#D97706" stroke="#92400E" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="7" fill="#F59E0B" />
    {/* Translucent Sago Pearls */}
    <circle cx="9" cy="9" r="1.6" fill="#FEF3C7" />
    <circle cx="14.5" cy="8.5" r="1.8" fill="#FEF3C7" />
    <circle cx="8" cy="14" r="1.7" fill="#FEF3C7" />
    <circle cx="13" cy="13" r="2" fill="#FEF3C7" />
    <circle cx="15.5" cy="15" r="1.6" fill="#FEF3C7" />
    <circle cx="11.5" cy="17" r="1.5" fill="#FEF3C7" />
    {/* Roasted Peanuts Flecks */}
    <ellipse cx="11" cy="7.5" rx="1.5" ry="1" fill="#78350F" />
    <ellipse cx="15" cy="11.5" rx="1.8" ry="1" transform="rotate(30 15 11.5)" fill="#78350F" />
    <ellipse cx="10" cy="15.5" rx="1.6" ry="0.9" transform="rotate(-20 10 15.5)" fill="#78350F" />
  </svg>
);

// 7. Traditional Cutting Chai Glass (पुणेरी कटिंग चहा)
export const CuttingChaiIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Steam */}
    <path d="M10 2.5C10 1.5 11 1.5 11 0.5" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" />
    <path d="M13 3C13 2 14 2 14 1" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" />
    {/* Glass Rim */}
    <path d="M5.5 5H18.5" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
    {/* Fluted Glass Body */}
    <path
      d="M6 5.5L8 21.5C8.1 22.3 8.7 23 9.5 23H14.5C15.3 23 15.9 22.3 16 21.5L18 5.5H6Z"
      fill="rgba(241, 245, 249, 0.4)"
      stroke="#64748B"
      strokeWidth="1.2"
    />
    {/* Hot Brown Tea Liquid */}
    <path
      d="M7.2 10L8.2 21H15.8L16.8 10H7.2Z"
      fill="#B45309"
    />
    {/* Froth */}
    <ellipse cx="12" cy="10" rx="4.8" ry="1.2" fill="#FDE68A" />
    {/* Fluted Ribs */}
    <line x1="10" y1="11" x2="10.5" y2="21" stroke="#D97706" strokeWidth="0.8" />
    <line x1="14" y1="11" x2="13.5" y2="21" stroke="#D97706" strokeWidth="0.8" />
  </svg>
);

// 8. Fresh Soft Bakery Pav (लादी पाव)
export const BakeryPavIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Pav Bun 1 */}
    <rect x="4" y="6" width="7" height="13" rx="3.5" fill="#D97706" stroke="#92400E" strokeWidth="1" />
    <ellipse cx="7.5" cy="9.5" rx="2.5" ry="2" fill="#FBBF24" />
    {/* Pav Bun 2 */}
    <rect x="13" y="6" width="7" height="13" rx="3.5" fill="#D97706" stroke="#92400E" strokeWidth="1" />
    <ellipse cx="16.5" cy="9.5" rx="2.5" ry="2" fill="#FBBF24" />
    {/* Butter Glaze Line */}
    <path d="M6 13C8 13.5 10 13 11 13.5" stroke="#FEF08A" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M15 13C17 13.5 19 13 20 13.5" stroke="#FEF08A" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

// 9. Alandi Temple Gopuram / Shikhara (आळंदी ज्ञानेश्वर महाराज समाधी मंदिर)
export const AlandiTempleIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Bhagwa Saffron Dhwaja Flag */}
    <path d="M13 1V4L17 2.5L13 1Z" fill="#EA580C" />
    <line x1="13" y1="1" x2="13" y2="5" stroke="#B45309" strokeWidth="1.2" />
    {/* Kalash (Gold Pitcher Top) */}
    <circle cx="12" cy="5.5" r="1.5" fill="#F59E0B" />
    {/* Shikhara Levels */}
    <path d="M10 7L12 5.5L14 7H10Z" fill="#D97706" />
    <path d="M8.5 10L10 7H14L15.5 10H8.5Z" fill="#B45309" stroke="#78350F" strokeWidth="0.8" />
    <path d="M7 14L8.5 10H15.5L17 14H7Z" fill="#D97706" stroke="#78350F" strokeWidth="0.8" />
    <path d="M5.5 18L7 14H17L18.5 18H5.5Z" fill="#B45309" stroke="#78350F" strokeWidth="0.8" />
    {/* Temple Sanctum Base & Arched Door */}
    <rect x="4" y="18" width="16" height="4.5" fill="#78350F" />
    <path d="M10 22.5V19C10 18 14 18 14 19V22.5H10Z" fill="#FEF3C7" />
  </svg>
);

// 10. Chilled Masala Taak / Solkadhi Glass (ताक व सोलकढी)
export const TaakSolkadhiIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Tall Glass */}
    <path
      d="M7 4L8.5 21C8.6 21.6 9.1 22 9.7 22H14.3C14.9 22 15.4 21.6 15.5 21L17 4H7Z"
      fill="rgba(241, 245, 249, 0.5)"
      stroke="#64748B"
      strokeWidth="1.2"
    />
    {/* Pastel Pink Solkadhi Drink */}
    <path
      d="M7.8 7L8.7 20.5H15.3L16.2 7H7.8Z"
      fill="#F472B6"
    />
    {/* Roasted Jeera & Coriander on top */}
    <ellipse cx="12" cy="7" rx="4.2" ry="1.2" fill="#FDF2F8" />
    <circle cx="10.5" cy="7" r="0.6" fill="#78350F" />
    <circle cx="13" cy="7.2" r="0.7" fill="#78350F" />
    <circle cx="11.5" cy="6.8" r="0.5" fill="#15803D" />
  </svg>
);
