//
//  Appcelerator Titanium Mobile
//  WARNING: this is a generated file and should not be modified
//

#import <UIKit/UIKit.h>
#define _QUOTEME(x) #x
#define STRING(x) _QUOTEME(x)

NSString * const TI_APPLICATION_DEPLOYTYPE = @"development";
NSString * const TI_APPLICATION_ID = @"com.dcgov.dcoa";
NSString * const TI_APPLICATION_PUBLISHER = @"jpowell";
NSString * const TI_APPLICATION_URL = @"http://dcoa.dc.gov";
NSString * const TI_APPLICATION_NAME = @"DCOA";
NSString * const TI_APPLICATION_VERSION = @"1.0";
NSString * const TI_APPLICATION_DESCRIPTION = @"DC Office On Aging";
NSString * const TI_APPLICATION_COPYRIGHT = @"Office of Chief Technology Officer (OCTO) - DC.Gov";
NSString * const TI_APPLICATION_GUID = @"aa52e1d9-e9ce-42ce-a110-4efc2a082ac3";
BOOL const TI_APPLICATION_ANALYTICS = true;
NSString * const TI_APPLICATION_BUILD_TYPE = @"";

#ifdef TARGET_IPHONE_SIMULATOR
NSString * const TI_APPLICATION_RESOURCE_DIR = @"";
#endif

int main(int argc, char *argv[]) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

#ifdef __LOG__ID__
	NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
	NSString *documentsDirectory = [paths objectAtIndex:0];
	NSString *logPath = [documentsDirectory stringByAppendingPathComponent:[NSString stringWithFormat:@"%s.log",STRING(__LOG__ID__)]];
	freopen([logPath cStringUsingEncoding:NSUTF8StringEncoding],"w+",stderr);
	fprintf(stderr,"[INFO] Application started\n");
#endif

	int retVal = UIApplicationMain(argc, argv, nil, @"TiApp");
    [pool release];
    return retVal;
}
