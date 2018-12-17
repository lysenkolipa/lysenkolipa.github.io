<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'ym;j`E4+Q!Q>P=t8J*:}eL[V#0@R={M .o{3/71# m[J*7`Mz9*->4mztd,_s3@>');
define('SECURE_AUTH_KEY',  '08w4}i!bn^@wZ[07HtXd-c,lw/9HZX]-L-?!l}t{|Bjb$b6Az|!N]MF-&1Z-`|2M');
define('LOGGED_IN_KEY',    '7U+c;H@i#1.Zd{YP#Pm3OnnGJ +*-r>:1azSf^b9/0]s+.g |PgE$PD5OCeKH|E[');
define('NONCE_KEY',        '}f$=Pf2Sg4%8~P);C{])PW<XI}k`q1v?VLeLFZ2meH)&hy!=V^Y~:G`IUCB/3Xa8');
define('AUTH_SALT',        '6#?m|XL.c=U-JwYWSHtc4G4]`4Ad%LX@n }B{_L<Sn&<-)@i<ctF|Z|I-Xzq!`un');
define('SECURE_AUTH_SALT', '`Cg&A~)Yn|ldlVvm)e^^S0ak4Tz{x0v`up/X2&JVve<Rks3fz|{/sdHX}MNMaRLo');
define('LOGGED_IN_SALT',   ',mJi`aHJ-/q&5qxARA3ffc,^!5Oce~e[cV5^@Z%AS93(nAnv4zXmtrW(PR3P>%xa');
define('NONCE_SALT',       'Jbrk6[` z$B-gywd_S iYDdMVx)ZiA(y%G_d>1a?=1sf?T`dopF9I3Uk#~Y9Frvl');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
